from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Employee

# Render the index.html template
def index_view(request):
    return render(request, "index.html")  

# registratin page view
def registration_view(request):
    return render(request, "authentication/registration.html")

#//////////////////////////

# registration page view with athentication
def registration_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('fname')
        last_name = request.POST.get('lname')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return redirect('registration_error')

        # Check if passwords match
        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect('registration')

        # Create a new user
        user = User.objects.create_user(username=username, email=email, password=password1)
        user.first_name = first_name
        user.last_name = last_name
        user.save()
        messages.success(request, "Registration successful!")
        return redirect('registration_success')  # Redirect to the success page

    return render(request, "authentication/registration.html")
# registration sucess page view
def registration_sucess(request):
    return render(request, "authentication/registration_sucess.html")

# registration error page
def registration_error(request):
    return render(request, "authentication/registration_error.html")

#//////////////////////////

# login page view
def login_view(request):
    return render(request, "authentication/login.html")

# login page with athentication
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        adhar_number = request.POST.get('adhar_number')
        password = request.POST.get('password')
        login_as_employee = request.POST.get('login_as_employee')  # Checkbox value

        if login_as_employee:  # Login as Employee
            try:
                employee = Employee.objects.get(adhar_number=adhar_number)
                if employee.password == password:  # Simple password check (not recommended for production)
                    messages.success(request, f"Welcome, {employee.first_name}!")
                    return redirect('home')  # Redirect to the home page
                else:
                    messages.error(request, "Invalid Aadhaar number or password.")
                    return redirect('login_error')  # Redirect to the login error page
            except Employee.DoesNotExist:
                messages.error(request, "Employee not found.")
                return redirect('login_error')  # Redirect to the login error page
        else:  # Login as User
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)  # Log the user in
                return redirect('home')  # Redirect to the home page
            else:
                messages.error(request, "Invalid username or password.")
                return redirect('login_error')  # Redirect to the login error page

    return render(request, "authentication/login.html")

# login error page
def login_error(request):
    return render(request, "authentication/login_error.html")

# home page view
def home_view(request):
    return render(request, "home.html")


#employee view page
def create_employee_view(request):
    return render(request, "authentication/employee_register.html")

# employee registration 
def create_employee_veiw(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        adhar_number = request.POST.get('adhar_number')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Create and save the employee
        Employee.objects.create(
            username=username,
            first_name=first_name,
            last_name=last_name,
            adhar_number=adhar_number,
            email=email,
            password=password
        )
        return redirect('registration_success')  # Redirect to the success page

    return render(request, "authentication/employee_register.html")

# logout page view
def logout_view(requesr):
    return redirect('index')

#//////////////////////////

#electriction page view
def electriction_view(request):
    return render(request,"designations/electriction.html")



