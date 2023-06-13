from django.db import models
import datetime


class research_topics(models.Model):
    topic=models.CharField(max_length=100)
    descriprion=models.CharField(max_length=500)


class faculty_members(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email_id=models.EmailField(max_length=50)
    research_interest=models.ForeignKey(research_topics,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='media/images/faculty')


class awards_and_recognition(models.Model):
    faculty=models.ForeignKey(faculty_members,on_delete=models.CASCADE)
    description=models.CharField(max_length=500)
    

class publications(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=500)
    image=models.ImageField(upload_to='media/images/publications')


class staff_members(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    post=models.CharField(max_length=100)
    email=models.EmailField(max_length=50)

class timetable(models.Model):
    semester=models.CharField(max_length=10) #Autumn or Spring
    year=models.CharField(max_length=4)
    summary=models.FileField(upload_to='media/files/timetable')
    faculty_wise_teaching_slot=models.FileField(upload_to='media/files/timetable')
    faculty_wise_timetable=models.FileField(upload_to='media/files/timetable')
    teaching_assistant_loading=models.FileField(upload_to='media/files/timetable')
    specialization_wise_allocation=models.FileField(upload_to='media/files/timetable')