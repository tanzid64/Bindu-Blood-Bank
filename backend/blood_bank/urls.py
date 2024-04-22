from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include, re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
# DRF yasg
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView



urlpatterns = [
   path('jet/', include('jet.urls', 'jet')),
   path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
   path('admin/', admin.site.urls),
   # YOUR PATTERNS
   path('schema/', SpectacularAPIView.as_view(), name='schema'),
   # Optional UI:
   path('', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
   path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
   path('api/v1/auth/', include("account.urls")),
   path('api/v1/core/', include("core.urls")),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# Admin Panel Customization
admin.site.index_title = "Bindu"
admin.site.site_header = "Bindu Admin Panel"