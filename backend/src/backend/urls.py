from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .api import UserViewSet
from .views import (
    BarChartDataView,
    CandlestickDataView,
    LineChartDataView,
    PieChartDataView,
)

router = routers.DefaultRouter()
router.register("users", UserViewSet, basename="api-users")


urlpatterns = [
    path(
        "api/schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
    ),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/", include(router.urls)),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("admin/", admin.site.urls),
    path(
        "api/candlestick-data/", CandlestickDataView.as_view(), name="candlestick-data"
    ),
    path("api/line-chart-data/", LineChartDataView.as_view(), name="line-chart-data"),
    path("api/bar-chart-data/", BarChartDataView.as_view(), name="bar-chart-data"),
    path("api/pie-chart-data/", PieChartDataView.as_view(), name="pie-chart-data"),
]
