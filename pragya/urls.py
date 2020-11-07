from django.urls import path

from . import views

urlpatterns =[path("", views.index, name="index"),
            path("blog", views.blog, name="blog"),
            path("contact", views.contact, name="contact"),
            path("about", views.about, name="about"),
            path("admission", views.admission, name="admission"),
            path("courses", views.courses, name="courses"),
            path("fundamental", views.fundamental, name="fundamental"),
            path("prep", views.prep, name="prep"),
            path("finalstage", views.finalstage, name="finalstage"),
            path("crash", views.crash, name="crash"),
            path("iitcrash", views.iitcrash, name="iitcrash"),
            path("twelvepass", views.twelvepass, name="twelvepass")]