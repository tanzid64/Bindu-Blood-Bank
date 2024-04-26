from rest_framework import serializers
from core.models import Service, ContactUs


class ServiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Service
    fields = ['title', 'image', 'description']

  

class ContactSerializer(serializers.ModelSerializer):
  class Meta:
    model = ContactUs
    fields = ['name', 'email', 'description']