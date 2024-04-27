import sys
from django.db import models
from core.models import TimeStampMixin
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
from django.utils.text import slugify
from rest_framework_simplejwt.tokens import RefreshToken
from .constants import GENDER_TYPE, BLOOD_TYPE
from cloudinary.models import CloudinaryField
from datetime import datetime, timedelta
from io import BytesIO  #basic input/output operation
from PIL import Image #Imported to compress images
from django.core.files.uploadedfile import InMemoryUploadedFile
# Create your models here.
class User(TimeStampMixin, AbstractUser):
    image = models.ImageField(
        upload_to="Bindu_Blood_Bank_Api/Users",
    )
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    address = models.TextField()
    gender = models.CharField(max_length=10)
    blood_group = models.CharField(choices=BLOOD_TYPE)
    total_donated = models.IntegerField(default=0)
    last_donation_date = models.DateField(null=True, blank=True, default=None)
    is_available = models.BooleanField(default=True)
    
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('username',)

    def __str__(self) -> str:
        return f"{self.username}"
    def save(self, *args, **kwargs):
        # Convert blood group to lowercase and replace '+' with '_positive'
        if self.blood_group:
            self.blood_group = slugify(self.blood_group).replace("-", "_")
        self.image = self.compressImage(self.image)
        super().save(*args, **kwargs)

        super().save(*args, **kwargs)
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
        }
    def compressImage(self,image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        imageTemproary.resize( (1020,573) ) 
        imageTemproary.save(outputIoStream , format='Webp', quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream,'ImageField', "%s.webp" % image.name.split('.')[0], 'image/webp', sys.getsizeof(outputIoStream), None)
        return image


class OneTimePassword(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6, unique=True)

    def __str__(self):
        return f"{self.user.email} - {self.otp}"
