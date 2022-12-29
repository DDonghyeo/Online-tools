from django.contrib import admin
from django.urls import path
from randomarray import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('randomarray/',views.generator)
]