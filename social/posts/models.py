from django.db import models
from social.models import SoftDeleteMixin, TimestampMixin
from .managers import PostManager
from django.template.defaultfilters import truncatechars
from PIL import Image
from io import BytesIO
from django.core.files import File


def make_thumbnail(image, size=(100, 100)):
    """Makes thumbnails of given size from given image"""

    im = Image.open(image)

    im.convert('RGB') # convert mode

    im.thumbnail(size,Image.ANTIALIAS) # resize image

    thumb_io = BytesIO() # create a BytesIO object

    im.save(thumb_io, 'JPEG', quality=250,) # save image to BytesIO object

    thumbnail = File(thumb_io, name=image.name) # create a django friendly File object

    return thumbnail
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
    created_at = models.DateTimeField(
        auto_now_add=True,
        db_index=True,
    )
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
    thumbnail=models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
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
    
    def save(self, *args, **kwargs):
        self.thumbnail = make_thumbnail(self.image, size=(100, 100))

        super().save(*args, **kwargs)
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
    def short_body(self):
        return truncatechars(self.body,100)
    @property
    def short_title(self):
        return truncatechars(self.title,100)
    @property
    def approved(self):
        return (self.is_active)