from django.contrib import admin
from .models import Post
import datetime
from django.contrib.auth import  get_user_model
User = get_user_model()
admin.site.site_header="Qunawera Admin "
admin.site.index_title=" Portal "
@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    
    def activate_post(modeladmin,request,queryset):
        queryset.update(is_active=True)
    def approve_reported(modeladmin,request,queryset):
        queryset.update(is_reported=True, is_active=False)
    def disapprove_reported(modeladmin,request,queryset):
        queryset.update(is_reported=False, is_active=True)
    def close_post(modeladmin,request,queryset):
        queryset.update(closed=True)
    def open_post(modeladmin,request,queryset):
        queryset.update(closed=False)
       
    def deactivate_post(modeladmin,request,queryset):
        queryset.update(is_active=False)
        
   # readonly_fields=("liked","is_reply","author","image","thumbnail")
    list_display=("id","author","approved","parent","short_title","short_body","image","likes_count","deleted","closed","created_at","updated_at","is_reported")
    search_fields=["author__name"]
    list_filter=('is_active','closed',"is_reply",)
    list_display_links = ("author",)
    actions = ['open_post','close_post','activate_post', 'deactivate_post','approve_reported','disapprove_reported']
    list_per_page = 20 
   # exclude=("parent",)

    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False)
    


class PostsToday(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Posted Today-Approved'

class PostsByDay(PostsAdmin):
    
    def get_queryset(self,request):
        today=datetime.date.today()
      
        qs=super(PostsAdmin,self).get_queryset(request)
        return qs.filter(created_at__gt=today,is_active=True,closed=False,deleted=False)
admin.site.register(PostsToday,PostsByDay)
class PostsTodayNotApproved(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Posted Today-Not Approved'

class PostsNotApproved(PostsAdmin):
    
    def get_queryset(self,request):
        today=datetime.date.today()
      
        qs=super(PostsAdmin,self).get_queryset(request)
        return qs.filter(created_at__gt=today,is_active=False)
admin.site.register( PostsTodayNotApproved,PostsNotApproved)

class PostsNotApproved(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Posts Not Approved'

class NotApproved(PostsAdmin):
    
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False,is_reported=False,deleted=False)
    
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
        return  qs.filter(is_reply=True,is_reported=True,deleted=False,closed=False)
    
    
admin.site.register(ReportedReplies,ReportedPostReplies)

class ReportedPosts(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Reported Posts'

class AllReportedPosts(PostsAdmin):
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False,is_reported=True,deleted=False,closed=False)
    
    
admin.site.register(ReportedPosts,AllReportedPosts)


class DeletedPosts(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Deleted Posts'

class AllDeletedPosts(PostsAdmin):
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False,deleted=True,closed=False)
    
    
admin.site.register(DeletedPosts,AllDeletedPosts)

class DeletedReplies(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Deleted Replies'

class AllDeletedReplies(PostsAdmin):
    
    def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=True,deleted=True,closed=False)
    
    
admin.site.register(DeletedReplies,AllDeletedReplies)


class Closed(Post):
    class Meta:
        proxy=True
        verbose_name_plural='Closed Posts'

class AllClosedPosts(PostsAdmin):
    
     def get_queryset(self, request):
        qs=super(PostsAdmin,self).get_queryset(request)
        return  qs.filter(is_reply=False,deleted=False,closed=True)
    
    
admin.site.register(Closed,AllClosedPosts)