from django.contrib.auth import get_user_model
from django.contrib.postgres.aggregates import ArrayAgg
import random
from django.db.models import Q, QuerySet
from django.db.models.expressions import Exists, OrderBy, OuterRef

User = get_user_model()


class PostManager(QuerySet):
    def closed(self):
        """
        excludes closed posts on user feed timelines
        """
        return self.exclude(closed=True)
    def active(self):
        """Return all active posts.

        Posts uses soft delete. If the post is not active, it was deleted.
        """
        return self.filter(is_active=True, deleted=False)

    def feed(self, user: User):
        """Return the `user`'s posts, and the posts of the users they're
        following.

        :param user: User to retrieve feed from.
        """
        return (
            self.posts().closed().exclude(author__is_active=False).filter(Q(author__followers=user) | Q(author=user)|Q(closed=True)).distinct()
        )

    def posts(self):
        # Aggregate all user IDs that have replied to a post.
        reply_ids = ArrayAgg(
            "alt__author_id",
            filter=Q(alt__is_reply=True, alt__is_active=True),
            
        )
        # Aggregate all user IDs that have reposted a post.
        repost_ids = ArrayAgg(
            "alt__author_id",
            filter=Q(alt__is_reply=False, alt__is_active=True),
          
        )
        return (
            self.active()
            .filter(is_reply=False)
            .prefetch_related("author__following")
            .prefetch_related("author__followers")
           
            .prefetch_related("liked")
            .select_related("author__profile")
            .annotate(
                reply_ids=reply_ids,
                repost_ids=repost_ids,
            )
        )

    def profile_posts(self, user: User):
        """Return only `user`'s posts.

        :param user: User to retrieve posts from.
        """
        return self.posts().filter(author=user)
   

    def recommend_posts(self, user: User, long: bool = False):
        """Recommend posts to `user`.

        :param user: User to recommend posts to.
        :param long: Whether or not to limit the query. Limited queries are for
            the aside column. Long queries are for the recommended posts page,
            which is paginated.
        
        """
        random_sample=self.posts().values_list("id",flat=True)
        random_id_list=random.sample(list(random_sample),min(len(random_sample),5))
        has_item=self.posts().filter(
            author_id=OuterRef('pk')
    
       )
        qs = (
            self.posts().annotate(n_posts=Exists(has_item)).closed().exclude(author__followers=user).filter(~Q(author=user),parent=None ,id__in=random_id_list)
            .order_by("-n_posts")
        )
        if long is False:
            qs = qs[:5]
        return qs
