from django.db import models

# Create your models here.

class contactservice(models.Model):
    names = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True)
    tel = models.IntegerField(null=True)
    studentclass = models.TextField(null=True)
    message = models.TextField(null=True)

class admissionservice(models.Model):
    studentname = models.CharField(max_length=100, null=True)
    fathername = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True)
    phone = models.IntegerField(null=True)
    dateofbirth = models.DateField(null=True)
    gender = models.TextField(null=True)
    schoolname = models.TextField(null=True)
    address = models.TextField(null=True)
    course = models.TextField(null=True)