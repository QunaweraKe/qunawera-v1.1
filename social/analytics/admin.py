from django.contrib import admin
from django.contrib.admin.models import LogEntry
# Register your models here.
from .models import UserSession,Viewed

admin.site.register(Viewed)
@admin.register(UserSession)
class UsersessionAdmin(admin.ModelAdmin):
    readonly_fields=("user","session_key","time_logged_in","ip_address","is_active","in_active")
    list_display=("user","session_key","time_logged_in","ip_address","is_active","in_active")
    search_fields=["user__name"]
    list_filter=('is_active',)
    list_per_page = 100 
  


class LogEntryAdmin(admin.ModelAdmin):
    list_display=('content_type','user','action_time')
admin.site.register(LogEntry,LogEntryAdmin)


#TODO:MAKE VIEWED OBJECTS AND GET CLIENT IP ADDRESSES