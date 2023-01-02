from django.contrib import admin
from django.urls import path,include
from randomarray import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('randomarray/',views.generator),
    path('binaryconverter/',views.converter),
    path('powercalculator/',views.power)
]
