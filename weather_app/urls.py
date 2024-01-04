from django.contrib import admin
from django.urls import path,include


from . import views;
urlpatterns = [
    path('',views.login,name='login'),
    path('register',views.register,name='register'),
    path('login',views.login,name='login'),
    path('main',views.main,name='main'),
    path('admin/', admin.site.urls),
]