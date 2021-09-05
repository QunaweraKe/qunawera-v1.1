from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import *
class ProfileInline(admin.StackedInline):
    model = Profile
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'display_name','name', 'email','is_active','is_staff','last_login')
    list_editabl=('display_name',)
    exclude=('password',)
    inlines = [ProfileInline,]

    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=True)
    
    

class UserProfileAdmin (admin.ModelAdmin):
    model=Profile
    list_display=('user','bio','image','location','sex','banner')
admin.site.register(Profile,UserProfileAdmin)





class DeletedAccounts(User):
    class Meta:
        proxy=True
        verbose_name_plural='Inactive Accounts'

class Inactive(UserAdmin):
    readonly_fields=('is_active',)
    def get_queryset(self, request):
        qs=super(UserAdmin,self).get_queryset(request)
        return  qs.filter(is_active=False)
    
admin.site.register(DeletedAccounts,Inactive)