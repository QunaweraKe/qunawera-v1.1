from django.contrib import admin
from django.contrib.auth.admin import UserAdmin 
from .models import *
import datetime
class ProfileInline(admin.StackedInline):
    model = Profile
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    def get_actions(self, request):
        actions=super(UserAdmin,self).get_actions(request)
        if request.user.is_superuser != False :
            del actions['delete_selected']
        return actions
    def activate_users(modeladmin,request,queryset):
        queryset.update(is_active=True)
    list_display = ('id', 'display_name','name', 'email','is_active','is_staff','created_at','last_login','country')
    list_editabl=('display_name',)
    exclude=('password',)
    inlines = [ProfileInline,]
    actions = ['activate_users',]
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=True,is_staff=False)
    
    

class UserProfileAdmin (admin.ModelAdmin):
    model=Profile
    list_display=('user','bio','image','location','sex','banner')
admin.site.register(Profile,UserProfileAdmin)





class DeletedAccounts(User):
    class Meta:
        proxy=True
        verbose_name_plural='Inactive User Accounts/Deleted'

class Inactive(UserAdmin):
    readonly_fields=('is_active',)
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False,is_staff=False)
    
admin.site.register(DeletedAccounts,Inactive)


class SuperUserAccounts(User):
    class Meta:
        proxy=True
        verbose_name_plural='Active Admin Accounts'

class SuperAccounts(UserAdmin):
    readonly_fields=('is_active','is_staff')
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=True,is_staff=True)
    
admin.site.register(SuperUserAccounts,SuperAccounts)

class   InactiveSuperUserAccounts(User):
    class Meta:
        proxy=True
        verbose_name_plural='Inactive Admin Accounts/Deleted'

class   InactiveSuperAccounts(UserAdmin):
    readonly_fields=('is_active','is_staff')
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False,is_staff=True)
    
admin.site.register(InactiveSuperUserAccounts,InactiveSuperAccounts)


class   CreatedToday(User):
    class Meta:
        proxy=True
        verbose_name_plural=' Accounts Created Today'

class   Accounts(UserAdmin):
    readonly_fields=('is_active','is_staff')
    def get_queryset(self, request):
        today=datetime.date.today()
        qs=super(UserAdmin,self).get_queryset(request)
        return qs.filter(created_at__gt=today,)
    
admin.site.register(CreatedToday,Accounts)
#IP ADDRESSES