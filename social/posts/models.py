from django.db import models

from social.models import SoftDeleteMixin, TimestampMixin
from .managers import PostManager


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
    body = models.TextField(
        blank=True,
        max_length=1500,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        db_index=True,
    )
    postImage = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True,null=True)
    skillset=models.TextField(blank=True,
        max_length=1500,)
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
    payment=models.IntegerField(max_length=10000,default=0)
    objects = PostManager.as_manager()

    def __str__(self):
        ellipsis = "..." if len(self.body) > 60 else ""
        return f"{self.body[:100]}{ellipsis}"

    def get_replies(self):
        """ Get a post's replies. """
        return self.alt.filter(is_active=True, is_reply=True).order_by("created_at")

    def get_reposts(self):
        """ Get a post's reposts. """
        return self.alt.filter(is_active=True, is_reply=False).order_by("created_at")
