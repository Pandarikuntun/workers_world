from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'adhar_number', 'is_active', 'date_joined')
    search_fields = ('username', 'email')