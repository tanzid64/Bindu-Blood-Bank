from rest_framework import serializers
from event.models import Event

class EventPostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Event
    fields = ['title','banner', 'event_date', 'location', 'description']

class EventGetSerializer(serializers.ModelSerializer):
  model = Event
  fields = "__all__"