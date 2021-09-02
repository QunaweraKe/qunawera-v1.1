from django.contrib import admin
from .models import Post
from datetime import datetime
from django.contrib.auth import  get_user_model
User = get_user_model()
admin.site.site_header="Qunawera Admin "
admin.site.index_title=" Portal "
@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    
    def activate(modeladmin,request,queryset):
        queryset.update(is_active=True)
    def approve_reported(modeladmin,request,queryset):
        queryset.update(is_reported=True, is_active=False)
    def disapprove_reported(modeladmin,request,queryset):
        queryset.update(is_reported=False, is_active=True)
    def close_post(modeladmin,request,queryset):
        queryset.update(closed=True)
    def open_post(modeladmin,request,queryset):
        queryset.update(closed=False)
       
    def deactivate(modeladmin,request,queryset):
        queryset.update(is_active=False)
        
   # readonly_fields=("liked","is_reply","author","image","thumbnail")
    list_display=("id","author","approved","short_title","short_body","image","likes_count","closed","created_at","updated_at","is_reported")
    search_fields=["author"]
    list_filter=('is_active','closed',"is_reply",)
    list_display_links = ("author",)
    actions = ['open_post','close_post','activate', 'deactivate','approve_reported','disapprove_reported']
    list_per_page = 20 
    exclude=("parent",)

    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False)
    


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

class Replies(Post):
    class Meta:
        proxy=True
        verbose_name_plural='All Replies'

class PostReplies(PostsAdmin):

    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=True)
    
    
admin.site.register(Replies,PostReplies)

class ReportedReplies(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Reported Replies'

class ReportedPostReplies(PostsAdmin):
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=True,is_reported=True)
    
    
admin.site.register(ReportedReplies,ReportedPostReplies)

class ReportedPosts(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Reported Posts'

class AllReportedPosts(PostsAdmin):
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False,is_reported=True)
    
    
admin.site.register(ReportedPosts,AllReportedPosts)