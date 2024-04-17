import pyotp
from datetime import timedelta, datetime
from account.models import OneTimePassword
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

# Generate Otp
def generate_otp(user):
  totp = pyotp.TOTP(pyotp.random_base32(), interval=300)  
  otp = totp.now()
  instance = OneTimePassword.objects.filter(user=user).first()
  if instance:
    instance.otp = otp
    instance.save()
  else:
    OneTimePassword.objects.create(user=user, otp=otp)
  return otp

# Send Email for verification
def send_template_email(**data):
  body = render_to_string(data["templateName"],data["context"])
  send_email = EmailMultiAlternatives(data["subject"], '', to=[data["toEmail"]])
  send_email.attach_alternative(body, 'text/html')
  send_email.send()
