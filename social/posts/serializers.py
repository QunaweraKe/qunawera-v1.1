
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from users.serializers import UserSerializer
from .models import Post



class PostParentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = [
            "is_reported",
            "author",
            "body",
            "created_at",
            "id",
            "image",
            "title",
           
        ]

class BasePostSerializer(serializers.ModelSerializer):
  
      
    author = UserSerializer(read_only=True)
    body = serializers.CharField(allow_blank=False,required=True)
    title = serializers.CharField(allow_blank=True,required=False)
    is_author = serializers.SerializerMethodField()
    parent = PostParentSerializer(read_only=True)
    parent_id = serializers.IntegerField(
        required=False, write_only=True, allow_null=True
    )
    report_statement=serializers.CharField(required=False)

    class Meta:
        model = Post
        fields = [
            "author",
            "body",
            "created_at",
            "id",
            "is_active",
            "is_author",
            "is_reply",
            "liked",
            "parent",
            "parent_id",
            "image",
            "title",
            "closed",
             "is_reported",
             "deleted",
           "report_statement",
           "requirements",
            
        ]

    def get_is_author(self, obj):
        request = self.context.get("request")
        return obj.author == request.user


class PostSerializer(BasePostSerializer):
    reply_ids = serializers.ListField(read_only=True)
    repost_ids = serializers.ListField(read_only=True)

    class Meta:
        model = Post
        fields = BasePostSerializer.Meta.fields + [
            "reply_ids",
            "repost_ids",
            "created_at",
            "updated_at",
            "is_reported",
            "report_statement"
        ]


class RepostSerializer(BasePostSerializer):
    body = serializers.CharField(allow_blank=True)


class ReplySerializer(BasePostSerializer):
    pass



class PostDetailSerializer(PostSerializer):
    extra_kwargs = {
        "created_at": {"read_only": True},
        "id": {"read_only": True},
        "is_reply": {"read_only": True},
        "parent_id": {"read_only": True},
    }
