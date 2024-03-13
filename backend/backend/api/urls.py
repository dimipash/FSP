from rest_framework.routers import DefaultRouter
from posts.api.urls import post_router
from products.api.urls import product_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(post_router.registry)
router.registry.extend(product_router.registry)

urlpatterns = [
    path('', include(router.urls))
]