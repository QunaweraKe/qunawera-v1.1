from rest_framework import filters, generics as rest_generics
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth import get_user_model, models

from search.pagination import SearchPagination
from users.serializers import UserSerializer
from posts.serializers import BasePostSerializer
from posts.models import Post
User = get_user_model()


class SearchAPIView(rest_generics.ListAPIView):
    """Get search results for given query string.

    Searches `User` `username` and `name` fields.
    """

    filter_backends = [filters.SearchFilter]
    pagination_class = SearchPagination
    permission_classes = [IsAuthenticated]
    search_fields = ('username', 'name')
    serializer_class = UserSerializer

    def get_queryset(self):
        return (
            User.objects.select_related("profile")
            .prefetch_related("following")
            .prefetch_related("followers")
        )

class SearchPostsAPIView(rest_generics.ListAPIView):
    """Get search results for given query string.

    Searches `posts` fields.
    """
    queryset = Post.objects.all().order_by('-created_at')
    filter_backends = [filters.SearchFilter]
    pagination_class = SearchPagination
    permission_classes = [IsAuthenticated]
    search_fields = ('body',)
    serializer_class = BasePostSerializer
    
    
''' todo :finish filter by posts /Check on API END POINT'''