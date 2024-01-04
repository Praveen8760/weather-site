from django.db import models
import datetime
# Create your models here.

class Register(models.Model):
    first_name=models.CharField(max_length=120)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    location=models.CharField(max_length=100)

    def __str__(self):
        return self.first_name