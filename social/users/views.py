from rest_framework.throttling import SimpleRateThrottle
from rest_framework import generics as rest_generics, status, views as rest_views
from rest_framework.decorators import api_view,throttle_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.shortcuts import get_object_or_404
from notifications.models import Notification
from social.views import PaginationMixin
from .pagination import UserPagination
from .serializers import (PasswordSerializer,
 ProfileSerializer,
  UserSerializer,
 AccountChangeSerializer)
from django.contrib.auth.decorators import login_required
from .signals import logged_in
User = get_user_model()

class EditPasswordAPIView(rest_generics.RetrieveUpdateDestroyAPIView):
    """ Edit password. """

    permission_classes = [IsAuthenticated]
    serializer_class = PasswordSerializer

    def update(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            new_password = serializer.validated_data.get("password")
            request.user.set_password(new_password)
            request.user.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditProfileAPIView(rest_generics.RetrieveUpdateDestroyAPIView):
    """ Edit profile: bio, location, website, etc. """

    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user.profile

    def delete (self, request):
         self.user.profile.image.delete(save=False)  # delete old image file



class EditUserAPIView(rest_generics.RetrieveUpdateDestroyAPIView):
    """ Edit user: username, email, etc. """

    permission_classes = [IsAuthenticated]
    serializer_class = AccountChangeSerializer

    def get_object(self):
        return self.request.user


class FollowersAPIView(rest_generics.ListAPIView):
    """ Get paginated list of user's followers. """

    pagination_class = UserPagination
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        user = get_object_or_404(User, is_active=True, slug=self.kwargs.get("slug"))
        return user.get_followers()


class FollowingAPIView(rest_views.APIView, PaginationMixin):
    pagination_class = UserPagination
    permission_classes = [IsAuthenticated]

    def _get_object(self, slug):
        return get_object_or_404(User, is_active=True, slug=slug)

    def delete(self, request, slug):
        """ Remove user from user's following. """
        user = self._get_object(slug)
        r_user = request.user
        r_user.unfollow(user)
        if r_user != user:
            Notification.objects.filter(
                from_user=r_user,
                to_user=user,
                type=4,
            ).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request, slug):
        """ Get paginated list of users user is following. """
        user = self._get_object(slug)
        following = user.get_following()
        paginated = self.paginator.paginate_queryset(following, self.request)
        serializer = UserSerializer(paginated, many=True)
        return self.paginator.get_paginated_response(serializer.data)

    def post(self, request, slug):
        """ Add user to user's following. """
        user = self._get_object(slug)
        r_user = request.user
        r_user.follow(user)

        # Create notification.
        if r_user != user:
            Notification.objects.create(
                from_user=r_user,
                to_user=user,
                type=4,
            )

        return Response(status=status.HTTP_201_CREATED)
class UserLoginRateThrottle(SimpleRateThrottle):
    scope = 'loginAttempts'

    def get_cache_key(self, request, view):
        user = User.objects.filter(username=request.data.get('username'))
        ident = user[0].pk if user else self.get_ident(request)

        return self.cache_format % {
            'scope': self.scope,
            'ident': ident
        }

    def allow_request(self, request, view):
        """
        Implement the check to see if the request should be throttled.
        On success calls `throttle_success`.
        On failure calls `throttle_failure`.
        """
        if self.rate is None:
            return True

        self.key = self.get_cache_key(request, view)
        if self.key is None:
            return True

        self.history = self.cache.get(self.key, [])
        self.now = self.timer()

        while self.history and self.history[-1] <= self.now - self.duration:
            self.history.pop()

        if len(self.history) >= self.num_requests:
            return self.throttle_failure()
        
        from collections import Counter
        if len(self.history) >= 3:
            data = Counter(self.history)
            for key, value in data.items():
                if value == 2:
                    return self.throttle_failure()
        return self.throttle_success(request)

    def throttle_success(self, request):
        """
        Inserts the current request's timestamp along with the key
        into the cache.
        """
        user = User.objects.filter(username=request.data.get('username'))
        if user:
            self.history.insert(0, user[0].id)
        self.history.insert(0, self.now)
        self.cache.set(self.key, self.history, self.duration)
        return True



@api_view(["post"])
@throttle_classes([UserLoginRateThrottle])
def login_view(request):
   
    cred_login = request.data.get("login")
    cred_password = request.data.get("password")
    remember_me = request.data.get("rememberMe")
    user = authenticate(request, login=cred_login, password=cred_password)

    if user is not None:
     
        if not remember_me:
            # Session will expire when the user closes their browser.
            request.session.set_expiry(0)
        login(request, user)
        logged_in.send(user.__class__,instance=user,request=request)
        data = UserSerializer(user).data
        return Response(data=data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(["post"])
def logout_view(request):
    logout(request)
    return Response(status=status.HTTP_204_NO_CONTENT)
"""
Performing a soft delete option for user
"""
@login_required
@api_view(["post"])
def remove_account(request):
    user_pk = request.user.pk
    logout(request)
    User.objects.filter(pk=user_pk).update(is_active=False)
    return Response(status=status.HTTP_200_OK)


    
class LongRecommendedUsersAPIView(rest_generics.ListAPIView):
    """Get paginated recommended users for the recommended users page.

    Recommended users are users that the user is not following.
    """

    pagination_class = UserPagination
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.recommend_users(user=self.request.user, long=True)


class RecommendedUsersAPIView(rest_generics.ListAPIView):
    """Get recommended users for the aside column.

    Recommended users are users that the user is not following.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.recommend_users(self.request.user)



@api_view(["post"])
def register_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.create(serializer.validated_data)
        # Session will expire when the user closes their browser.
        request.session.set_expiry(0)
        login(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailAPIView(rest_generics.RetrieveAPIView):
    """ Get user details of the given user. """

    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return get_object_or_404(User, slug=self.kwargs.get("slug"))



#TODO:USER THROTTLE NOT WORKING