
import random
from django.db import models
from social.models import SoftDeleteMixin, TimestampMixin
from .managers import PostManager
from django.template.defaultfilters import truncatechars
from django.contrib.auth import  get_user_model
import string

from PIL import Image
User = get_user_model()

def generate_unique_id(size=6,chars=string.ascii_uppercase +string.digits):

    return ''.join(random.choice(chars) for _ in range (size))


class Post(SoftDeleteMixin, TimestampMixin):
  
    """
    Everything is a `Post`: post, reply, repost.

    Post
        - `is_reply` is `False`
        - `parent` is `None`

    Reply
        - `is_reply` is `True`
        - `parent` is the parent `Post`

    Repost
        - `is_reply` is `False`
        - `parent` is the parent `Post`
    """

    author = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="posts",
    )
    title=models.TextField(max_length=200)
    body = models.TextField(
        blank=True,
        max_length=1500,

    )
            #CUSTOM post id
    posts_id=models.CharField(max_length=8,default=generate_unique_id,unique=True,null=False)
    updated_at=models.DateTimeField(
        auto_now=True,
        db_index=True,
        null=True,
        editable=False
    )
    requirements=models.TextField(max_length=800,null=True)
    deleted=models.BooleanField(default=False)
    created_at = models.DateTimeField(
        auto_now_add=True,
        db_index=True,
        editable=False,
    )
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
    is_reply = models.BooleanField(default=False)
    liked = models.ManyToManyField(
        "users.User",
        blank=True,
        related_name="liked",
    )
    parent = models.ForeignKey(
        "self",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="alt",
    )

    objects = PostManager.as_manager()
    closed=models.BooleanField(default=False)
    is_reported=models.BooleanField(default=False)
    report_statement=models.TextField(max_length=450)


    def save(self,*args,**kwargs):
        super(Post,self).save(*args,**kwargs)
        if not self.posts_id :
            self.posts_id = generate_unique_id()
            while Post.objects.filter(posts_id=self.posts_id).exists():
                self.posts_id= generate_unique_id()
               

        try:
            image_var=Image.open(self.image.path)
            if image_var.height >350 or image_var.width >350:
                output=(350,350)
                image_var.thumbnail(output)
                image_var.save(self.image.path)
        except:
            pass
    def __str__(self):
        ellipsis = "..." if len(self.body) > 60 else ""
        return f"{self.body[:100]}{ellipsis}"

    def get_replies(self):
        """ Get a post's replies. """
        return self.alt.filter(is_active=True, is_reply=True).order_by("created_at")

    def get_reposts(self):
        """ Get a post's reposts. """
        return self.alt.filter(is_active=True, is_reply=False).order_by("created_at")
    #def __str__(self) :
    #    return self.author
    @property
    def likes_count(self):
        return self.liked.count()
    
    @property
    def short_body(self):
        return truncatechars(self.body,100)
    @property
    def short_title(self):
        return truncatechars(self.title,100)
    @property
    def published(self):
        return (self.is_active)
    @property
    def image_url(self):
         if self.image and hasattr (self.image,'url'):
            return self.image.url

    class Meta:
          verbose_name_plural="Active posts"
