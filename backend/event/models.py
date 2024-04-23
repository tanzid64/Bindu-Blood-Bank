from django.db import models
from django.utils.text import slugify
from core.models import TimeStampMixin
from account.models import User
# Create your models here.
class Event(TimeStampMixin):
  title = models.CharField(max_length=255)
  slug = models.SlugField(unique=True)
  created_by = models.ForeignKey(User, related_name='event', on_delete=models.CASCADE)
  is_approved = models.BooleanField()
  event_date = models.DateField()
  location = models.CharField()
  banner = models.ImageField(upload_to='bindu_blood_bank/event_banner')
  description = models.TextField()

  def save(self, *args, **kwargs):
    if not self.slug:
      self.slug = slugify(self.title)
    super().save(*args, **kwargs)
