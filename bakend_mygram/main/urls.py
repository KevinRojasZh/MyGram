from django.urls import path,include
from .views import HelloWorld

urlpatterns = [
    path('api/hello/', HelloWorld.as_view(), name='hello_world'),
    path('users/', include('users.urls', namespace='users')),

]

