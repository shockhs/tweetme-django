from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.shortcuts import redirect, render


def login_view(request,*args, **kwargs):
    form = AuthenticationForm(request, data = request.POST or None)
    
    if form.is_valid():
        user_ = form.get_user()
        login(request,user_)
        return redirect('/')
    return render(request, 'accounts/login.html', {'form':form})

def logout_view(request,*args, **kwargs):
    if request.method == 'POST':
        logout(request)
        return redirect('/login')
    return render(request, 'accounts/logout.html')

def register_view(request,*args, **kwargs):
    form = UserCreationForm(data = request.POST or None)
    if form.is_valid():
        user =  form.save(commit=True)
        user.set_password(form.cleaned_data.get('password1'))
        login(request,user)
        return redirect('/')
    return render(request, 'accounts/register.html', {'form':form})
