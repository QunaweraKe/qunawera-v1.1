from django.contrib import admin
from .models import Post

admin.site.site_header="Qunawera Admin "


@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    list_display=("author","body","image","created_at")
    search_fields=["author"]
    list_filter=('is_reply',)
