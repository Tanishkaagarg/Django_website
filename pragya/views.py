from django.shortcuts import render

from .models import contactservice, admissionservice

# Create your views here.

def index(request):
    return render(request, "index.html")

def contact(request):
    if request.method == 'POST':
        names = request.POST.get('names')
        email = request.POST.get('email')
        tel = request.POST.get('tel')
        studentclass = request.POST.get('studentclass')
        message = request.POST.getlist('message')

        record = contactservice(names=names, email= email ,tel= tel ,studentclass= studentclass , message=message)
        record.save()

        return render(request, "index.html")
    else:
        return render(request, "contact.html")

def admission(request):
    if request.method == 'POST':
        studentname = request.POST.get('studentname')
        fathername = request.POST.get('fathername')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        dateofbirth = request.POST.get('dateofbirth')
        gender = request.POST.get('gender')
        schoolname = request.POST.get('schoolname')
        address = request.POST.get('address')
        course = request.POST.get('course')
    
        record = admissionservice(studentname=studentname, fathername=fathername, email=email, phone=phone, dateofbirth=dateofbirth, gender=gender, schoolname=schoolname, address=address, course=course)
        record.save()

        return render(request, "index.html")
    else:
        return render(request, "admission.html")


def blog(request):
    return render(request, "blog.html")

def courses(request):
    return render(request, "courses.html")

def about(request):
    return render(request, "about.html")

def fundamental(request):
    return render(request, "fundamental.html")

def prep(request):
    return render(request, "prep.html")

def twelvepass(request):
    return render(request, "twelvepass.html")

def crash(request):
    return render(request, "crash.html")

def iitcrash(request):
    return render(request, "iitcrash.html")

def finalstage(request):
    return render(request, "finalstage.html")
