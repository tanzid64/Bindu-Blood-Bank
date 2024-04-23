from django.shortcuts import render
from event.models import Event
from event.serializers import EventPostSerializer, EventGetSerializer
from event.permissions import EventPermission
from rest_framework import viewsets, status
from rest_framework.response import Response
# Create your views here.

class EventView(viewsets.ModelViewSet):
  queryset = Event.objects.all()
  permission_classes = (EventPermission,)
  def get_serializer_class(self):
    if self.action in ['create', 'update', 'partial_update']:
      return EventPostSerializer
    return EventGetSerializer
  
  # POST Method
  def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
  def create(self, request, *args, **kwargs):
    serializer = self.get_serializer_class(data=request.data)
    serializer.is_valid(serializer)
    headers = self.get_success_headers(serializer.data)
    response_serializer = self.get_serializer(serializer.instance)
    return Response(
      {"message": "Event created successfully", "data": response_serializer.data},
      status=status.HTTP_201_CREATED,
      headers=headers
    )
