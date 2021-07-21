from django.contrib import admin
from .models import *



admin.site.site_header="Qunawera Admin "


class PostAdmin(admin.StackedInline):
    model=Post
    

class PostsAdmin(admin.ModelAdmin):
    inlines=[PostAdmin]