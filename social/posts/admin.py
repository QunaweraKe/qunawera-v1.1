from django.contrib import admin
from .models import Post

admin.site.site_header="Qunawera Admin "

class PostAdmin(admin.TabularInline):
      model=Post

@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    list_display=("author","body","skillset","image","created_at","payment")
    search_fields=["author"]
    list_filter=('is_reply',)
