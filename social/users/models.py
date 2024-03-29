from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.postgres.fields.citext import CICharField, CIEmailField
from django.db import models
from django.utils.text import slugify
from django.utils.timezone import now
from social.models import SoftDeleteMixin, TimestampMixin
from .managers import UserManager
from PIL import Image
from users.countryname import CountryField




class User(SoftDeleteMixin, TimestampMixin, AbstractBaseUser,PermissionsMixin):
    """ Custom user model. """

    email = CIEmailField(
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField('active',default=True)
    is_staff = models.BooleanField(default=True)
    fake_account = models.BooleanField(default=False)
    following = models.ManyToManyField(
        "self",
        related_name="followers",
        symmetrical=False,
    )

    last_notification_read_time = models.DateTimeField(default=now)
    name = models.CharField(max_length=150)
    slug = models.SlugField(
        max_length=32,
        unique=True,
    )
    username = CICharField(
        max_length=32,
        unique=True,
    )
    country = CountryField(null=False)
    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email","name"]
    EMAIL_FIELD = "email"

    
   
    def display_name(self) -> str:
        """Get user's display name.

        When this project was started, `name` was not a required field. This
        method would return the user's username if `name` was not set. Instead
        of changing this throughout the frontend I left it as is.
        """
        ellipsis = "..." if len(self.username) > 15 else ""
        return f"{self.username[:15]}{ellipsis}"

    def follow(self, user: object) -> None:
        """ Follow `user`. """
        if user != self:
            self.following.add(user)

    def get_followers(self):
        """ Get users that are following user. """
        return (
            self.followers.filter(is_active=True)
            .select_related("profile")
            .prefetch_related("followers")
            .prefetch_related("following")
        )

    def get_following(self):
        """ Get users that user is following. """
        return (
            self.following.filter(is_active=True)
            .select_related("profile")
            .prefetch_related("followers")
            .prefetch_related("following")
        )

    def save(self, *args, **kwargs):
        """Modify user input.

        - Make sure the user's email is all lowercase.
        - Create a slug for the user.
        """

        self.email = self.email.lower()
        self.slug = slugify(self.username, allow_unicode=True)
        super().save(*args, **kwargs)
       



    def unfollow(self, user: object) -> None:
        """ Unfollow `user`. """
        self.following.remove(user)

    class Meta:
        
        verbose_name_plural='Active User Accounts'
class Profile(models.Model):
    class SexTypes(models.TextChoices):
        MALE = "M"
        FEMALE = "F"

    banner = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True)
    bio = models.TextField(max_length=500, blank=True)
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
    location = models.CharField(max_length=100, blank=True)
    sex = models.CharField(
        blank=True,
        max_length=1,
        choices=SexTypes.choices,
    )
    user = models.OneToOneField("users.User", on_delete=models.CASCADE)
    website = models.URLField(blank=True)
    def save(self,*args,**kwargs):
        super(Profile,self).save(*args,**kwargs)
        try:
            image_var=Image.open(self.image.path)
            if image_var.height >450 or image_var.width >450:
                output=(450,450)
                image_var.thumbnail(output)
                image_var.save(self.image.path)
        except:
            pass
  
    def __str__(self):
        return self.user.username




#TODO :ADD COUNTRYNAME CHOICES TO REGISTRATION