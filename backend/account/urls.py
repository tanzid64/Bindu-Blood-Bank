from django.urls import path,include
from account.views import UserRegistrationView, VerifyEmailView, UserProfileViewSet,SendOtpView
from rest_framework import routers
router = routers.DefaultRouter()
router.register('',UserProfileViewSet,basename="profile-api")
urlpatterns = [
    path('profile/', include(router.urls)),
    path('register/',UserRegistrationView.as_view(), name='register-api'),
    path('verify-email/', VerifyEmailView.as_view(), name="verify-email-api"),
    path('otp/request/',SendOtpView.as_view, name="send-otp-api"),
]
