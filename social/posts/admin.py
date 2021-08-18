from django.contrib import admin
from .models import Post

admin.site.site_header="Qunawera Admin "


@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    
    list_display=("author","approved","short_title","short_body","image","created_at","closed")
    search_fields=["author"]
    list_filter=('is_active',)
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False)

