from django.urls import path
from .views import (
    electriction_view,
    index_view,
    home_view,
    login_error,
    login_view,
    logout_view,
    registration_view,
    registration_sucess,
    registration_error,
)

urlpatterns = [
 # Route for the index page
    path("", index_view, name="index"), 
# Route for the index to registration page
    path("register.html/", registration_view, name="registration"),  
# Route for the success page  
    path("register/success/", registration_sucess, name="registration_success"),
# Route for the registration error page
    path("register/error/", registration_error, name="registration_error"),      
# Route for the index page  to login page
    path("login.html/", login_view, name="login"),
# Route for the login page  to home page
    path("login.html/login", login_view, name="login"), 
# Route for the home page   
    path("home/", home_view, name="home"),
# Route for the login error page 
    path("login/error/", login_error, name="login_error"), 
# logout page redirect to index page 
    path("home/login.html/" , logout_view, name="logout"),
# home to ectriction page 
    path("home/electriction/", electriction_view, name="electriction"),
]