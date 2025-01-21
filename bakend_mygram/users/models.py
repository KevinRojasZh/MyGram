from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    bio = models.TextField(
        max_length=500,
        blank=True,
        null=True,
    )
            
    profiel_picture = models.ImageField(
        upload_to='profile_pictures/', 
        height_field=None, 
        width_field=None,
        max_length=None,
        blank=True,
        null=True,
    )
    
    def __str__(self):
            return self.Username
