from django.contrib import admin
from .models import Post

admin.site.site_header="Qunawera Admin "

@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    
    def approve_status(modeladmin,request,queryset):
        queryset.update(is_active=True)
     
    def close_tasks(modeladmin,request,queryset):
        queryset.update(closed=True)
    def open_tasks(modeladmin,request,queryset):
        queryset.update(closed=False)
       
    def disapprove_status(modeladmin,request,queryset):
        queryset.update(is_active=False)
        
    readonly_fields=("liked","is_reply","author","image","thumbnail")
    list_display=("id","author","approved","short_title","short_body","image","closed","created_at","update_at",)
    search_fields=["author"]
    list_filter=('is_active',)
    list_display_links = ("author",)
    actions = ['open_tasks','close_tasks','approve_status', 'disapprove_status']
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False)

    