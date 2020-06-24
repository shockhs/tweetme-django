from django.http import Http404
from django.shortcuts import redirect, render

from .forms import ProfileForm
from .models import Profile


def profile_update_view(request, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect('/login?next=/profile/update')
    user = request.user
    profile = request.user.profile
    initialState = {
        'first_name':user.first_name,
        'last_name': user.last_name,
        'email':user.email
    }
    form = ProfileForm(request.POST or None, instance=profile,initial=initialState)
    if form.is_valid():
        profile_obj = form.save(commit=False)
        first_name = form.cleaned_data.get('first_name')
        last_name = form.cleaned_data.get('last_name')
        email = form.cleaned_data.get('email')
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.save()
        profile_obj.save()
    return render(request,'profiles/update.html', {'form':form})

def profile_detail_view(request, username, *args, **kwargs):
    # get profile for username
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        raise Http404
    is_following = False
    if request.user.is_authenticated:
        profile_obj = qs.first()
        is_following = request.user in profile_obj.followers.all()
    context = {
        'username':username,
        'profile':profile_obj,
        'is_following':is_following
    }
    return render(request,'profiles/detail.html', context)
