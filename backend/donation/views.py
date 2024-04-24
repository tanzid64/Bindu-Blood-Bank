from django.shortcuts import render
from account.models import User
from donation.models import DonationReport, DonationRequest
from donation.serializers import DonationRequestSerializer, DonationReportSerializer
from rest_framework import viewsets
from rest_framework.exceptions import ValidationError
from datetime import datetime
# Create your views here.
class DonationRequestView(viewsets.ModelViewSet):
  queryset = DonationRequest.objects.all()
  serializer_class = DonationRequestSerializer
  http_method_names = ('post','get','delete','patch')
  def perform_create(self, serializer):
    return serializer.save(created_by=self.request.user)
  
class DonationReportView(viewsets.ModelViewSet):
  queryset = DonationReport.objects.all()
  serializer_class = DonationReportSerializer
  http_method_names = ('post','get')
  def perform_create(self, serializer):
    event_id = serializer.validated_data['event_id']
    if event_id is None:
      raise ValidationError("Event ID is required.")
    try:
      event = DonationRequest.objects.get(id=event_id)
    except DonationRequest.DoesNotExist:
      raise ValidationError("Event does not exist.")
    user = self.request.user
    if event.created_by == user:
      event.is_accepted = True
      event.save()
      return serializer.save(user=self.request.user, event=event)
    if event.blood_group != user.blood_group:
      raise ValidationError("You can only donate same blood group")
    if not user.is_available:
      raise ValidationError("You can donate only once in 3 months")
    event.update(is_accepted=True)
    user.update(
      last_donation_date = datetime.now().date(),
      total_donated = user.total_donated + 1
    )
    return serializer.save(user=self.request.user, event=event)