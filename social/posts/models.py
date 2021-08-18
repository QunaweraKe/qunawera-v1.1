
from django.db import models
from social.models import SoftDeleteMixin, TimestampMixin
from .managers import PostManager
from django.template.defaultfilters import truncatechars

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
    @property
    def image_url(self):
         if self.image and hasattr (self.image,'url'):
            return self.image.url