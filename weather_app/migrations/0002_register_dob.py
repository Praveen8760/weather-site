# Generated by Django 5.0 on 2024-01-02 10:57

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weather_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='dob',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
