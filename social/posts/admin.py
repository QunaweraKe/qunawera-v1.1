from django.contrib import admin
from .models import Post,Reported
from datetime import datetime
from django.contrib.auth import  get_user_model
User = get_user_model()
admin.site.site_header="Qunawera Admin "
admin.site.index_title=" Portal "
@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    
    def approve_status(modeladmin,request,queryset):
        queryset.update(is_active=True)
     
    def close_tasks(modeladmin,request,queryset):
        queryset.update(closed=True)
    def open_tasks(modeladmin,request,queryset):
        queryset.update(closed=False)
       
    def disapprove_status(modeladmin,request,queryset):
        queryset.updated(is_active=False)
        
   # readonly_fields=("liked","is_reply","author","image","thumbnail")
    list_display=("id","author","approved","short_title","short_body","image","likes_count","closed","created_at","updated_at",)
    search_fields=["author"]
    list_filter=('is_active','closed',"is_reply",)
    list_display_links = ("author",)
    actions = ['open_tasks','close_tasks','approve_status', 'disapprove_status']
    list_per_page = 20 
    exclude=("parent",)

    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False)
    
    

@admin.register( Reported)
class ReportedAdmin(admin.ModelAdmin):
    list_display=("author","statement","reported_post","time","report_status",)
    search_fields=["author"]


class PostsToday(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Posted Today'

class PostsByDay(PostsAdmin):
    
    def get_queryset(self,request):
        today=datetime.date.today()
        qs=super(PostsAdmin,self).get_queryset(request)
        return qs.filter(created_at__range=[today])
admin.site.register(PostsToday,PostsByDay)

class PostsNotApproved(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Posts Not Approved'

class NotApproved(PostsAdmin):
    
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False)
    
admin.site.register(PostsNotApproved,NotApproved)