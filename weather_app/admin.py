from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(Register)
class RegisterAdmin(admin.ModelAdmin):
    list_display=("first_name","location")
    search_fields=("first_name",)