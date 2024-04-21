from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include, re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
# DRF yasg
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Bindu Blood Bank",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="tanzid@inbox.ru"),
      license=openapi.License(name="BSD License"),
     
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
   url="https://bindu-blood-bank-api.onrender.com/",
)


urlpatterns = [
   path('jet/', include('jet.urls', 'jet')),
   path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
   path('admin/', admin.site.urls),
   path('api/v1/auth/', include("account.urls")),
   path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# Admin Panel Customization
admin.site.index_title = "Bindu"
admin.site.site_header = "Bindu Admin Panel"