from rest_framework import generics, status, viewsets
from account.models import User
from rest_framework.response import Response
from account.constants import send_user_email
from account.serializers import UserRegistrationSerializer, UserSerializer
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode
# Create your views here.
class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    def perform_create(self, serializer):
        user = serializer.save()
        user.is_active=False
        user.save()
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        confirm_link = f"http://localhost:8000/api/account/active/{uid}/{token}"
        send_user_email('Account Confirmation Email', confirm_link, 'confirm_email.html', user)

class VerifyEmailView(generics.GenericAPIView):
    def get(self, request, uid64, token):
        try:
            uid = urlsafe_base64_decode(uid64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({'message': 'Activation Successfull'}, status=status.HTTP_202_ACCEPTED) 
        else:
            return Response({'error': 'Invalid activation link'}, status=status.HTTP_400_BAD_REQUEST)
        
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer