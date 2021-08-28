from django.contrib.auth.models import UserManager as UM
from django.db import models


from django.db.models.expressions import OrderBy


class UserQuerySet(models.QuerySet):
    def active(self):
        """Return all active users.

        `User` uses soft delete. If the user is not active, they have been
        deleted.
        """
        return self.filter(is_active=True).select_related("profile")

    def recommend_users(
        self,
        user: object,
        long: bool,
    ):
        """Recommend users to `user`.

        :param user: User to recommend users to.
        :param long: Whether or not to limit the query. Limited queries are for
            the aside column. Long queries are for the recommended users page,
            which is paginated.
        """
        qs = (
            self.active()
            .exclude(followers=user)
            .exclude(id=user.id)
            .prefetch_related("following")
            .prefetch_related("followers")
            .order_by('?')
        )
       
        if long is False:
            qs = qs[:7]
        return qs


class UserManager(UM):

    def _create_user(self, username, email, password, **extra_fields):
        """Override default `create_user` so both `username` and `email` are
        required fields.

        :param username: Username of the user being created.
        :param email: Email of the user being created.
        :param password: Password of the user being created.
        :return: User object.
        """
        if not username:
            raise ValueError("The given username must be set")
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def active(self):
        """ See :class:`UserQuerySet` :meth:`active`. """
        return self.get_queryset().active()

    def create_superuser(self,username,name, password=None,**kwargs):
       
        user=self._create_user(
            name=name,
            password=password,
            username=username,
            is_superuser=True,
            is_staff=True,
            
            **kwargs
            
                               )
        user.is_admin=True
        user.save(using=self._db)
        
        return user


    def get_queryset(self):
        return UserQuerySet(self.model, using=self._db)

    def recommend_users(self, user: object, long=False):
        """ See :class:`UserQuerySet` :meth:`recommend_users`. """
        return self.get_queryset().recommend_users(user, long)


'''
todo order by location when it is finished

'''