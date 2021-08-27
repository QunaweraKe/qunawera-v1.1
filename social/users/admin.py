from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import *
class ProfileInline(admin.StackedInline):
    model = Profile
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'display_name','name', 'email','is_active','is_staff')
    list_editabl=('display_name',)
    exclude=('password',)
    inlines = [ProfileInline,]

class UserProfileAdmin (admin.ModelAdmin):
    model=Profile
    list_display=('user','bio','image','location','sex','banner')
admin.site.register(Profile,UserProfileAdmin)


