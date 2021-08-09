from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

UserAdmin.fieldsets += ('custom',{'fields':('name')}),



class UserProfileAdmin (admin.ModelAdmin):
    model=Profile
    list_display=('user','bio','image','location','sex','banner')
admin.site.register(Profile,UserProfileAdmin)


