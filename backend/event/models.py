from django.db import models
from django.utils.text import slugify
from core.models import TimeStampMixin
from account.models import User
from cloudinary.models import CloudinaryField

# Create your models here.
class Event(TimeStampMixin):
  title = models.CharField(max_length=255)
  slug = models.SlugField(unique=True)
  created_by = models.ForeignKey(User, related_name='event', on_delete=models.CASCADE)
  is_approved = models.BooleanField(default=False)
  event_date = models.DateField()
  location = models.CharField()
  banner = CloudinaryField(
        'image', 
        folder="Bindu_Blood_Bank_Api/events",
        tags=['user','profile'],
    )
  description = models.TextField()

  def save(self, *args, **kwargs):
    if not self.slug:
      self.slug = slugify(self.title)
    super().save(*args, **kwargs)
