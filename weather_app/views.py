from django.shortcuts import render,redirect
# from django.contrib.auth.models import User

from django.contrib.auth.models import User,auth
from django.contrib import messages

from .models import *
import json

from django.core import serializers

# from django.contrib.auth import authenticate,login
# Create your views here.

location=""
def login(request):
    if request.method == 'POST':
        email=request.POST['email']
        password=request.POST['password']
        value=Register.objects.filter(email=email,password=password).exists()
        if value:
            global location
            location=Register.objects.filter(email=email).values("location")
            return redirect('main')
        else:
            messages.info(request,"Login Failed")
            return redirect('login')

    else:
        return render(request,'login.html')

def register(request):
    if request.method == 'POST':
        first_name=request.POST['first_name']
        email=request.POST['email']
        password=request.POST['password']
        location=request.POST['location']

        if Register.objects.filter(email=email).exists():
            messages.info(request,'Email already exists Try to login')
            return redirect('register')

        elif Register.objects.filter(first_name=first_name).exists():
            messages.info(request,'User already exists Try to login')
            return redirect('register')
        
        else:
            register=Register.objects.create(first_name=first_name,email=email,password=password,location=location)
            register.save()
            print("User Created")
            return redirect('login')
        
    else:
        return render(request,'register.html')

def main(request):
    return render(request,'main.html',{'values':location})