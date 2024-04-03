
from account.models import User
from account.constants import send_user_email
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes

@receiver(post_save, sender=User)
def send_verification_email(sender, instance, created, **kwargs):
    if created:
        user = instance
        token = default_token_generator.make_token(user)
        print("token ", token)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        print("uid ", uid)
        confirm_link = f"http:localhost:8000/api/account/active/{uid}/{token}"
        send_user_email('Account Confirmation Email', confirm_link, 'confirm_email.html', user)
