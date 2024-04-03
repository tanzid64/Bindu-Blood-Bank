from django.urls import path,include
from account.views import UserRegistrationView, VerifyEmailView, UserViewSet
from rest_framework import routers
router = routers.DefaultRouter()
router.register('',UserViewSet,basename="account-api")
urlpatterns = [
    path('registration/',UserRegistrationView.as_view(), name='registration-api'),
    path('active/<str:uid64>/<str:token>/', VerifyEmailView.as_view(), name='email-verification'),
    path('', include(router.urls)),
]
