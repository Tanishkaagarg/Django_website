# Generated by Django 3.1 on 2020-08-20 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='admissionservice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('studentname', models.CharField(max_length=100, null=True)),
                ('fathername', models.CharField(max_length=100, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone', models.IntegerField(null=True)),
                ('dateofbirth', models.DateField(null=True)),
                ('gender', models.TextField(null=True)),
                ('schoolname', models.TextField(null=True)),
                ('address', models.TextField(null=True)),
                ('course', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='contactservice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('names', models.CharField(max_length=100, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('tel', models.IntegerField(null=True)),
                ('studentclass', models.TextField(null=True)),
                ('message', models.TextField(null=True)),
            ],
        ),
    ]
