from django.urls import path, include
from rest_framework import routers
from core.views import ServiceView

router = routers.DefaultRouter()
router.register('services', ServiceView, basename='service-api')
urlpatterns = [
  path('', include(router.urls)),
]
