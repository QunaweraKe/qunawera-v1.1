from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import *
class ProfileInline(admin.StackedInline):
    model = Profile
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    def activate_users(modeladmin,request,queryset):
        queryset.update(is_active=True)
    list_display = ('id', 'display_name','name', 'email','is_active','is_staff','last_login')
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
        verbose_name_plural='Inactive User Accounts'

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
        verbose_name_plural='Inactive Admin Accounts'

class   InactiveSuperAccounts(UserAdmin):
    readonly_fields=('is_active','is_staff')
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False,is_staff=True)
    
admin.site.register(InactiveSuperUserAccounts,InactiveSuperAccounts)