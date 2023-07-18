from django.db import models

class research_area(models.Model):
    topic=models.CharField(max_length=100)
    description=models.CharField(max_length=500)


class faculty_member(models.Model):
    name = models.CharField(max_length=100)
    phd_college = models.CharField(max_length=100)
    research_area = models.TextField(blank=True) 
    institute_webpage = models.CharField(max_length=100,blank=True)
    personal_website = models.CharField(max_length=100,blank=True)
    email_id=models.EmailField(max_length=100)
    image=models.ImageField(upload_to="faculty_members", blank=True)


class staff_member(models.Model):
    name=models.CharField(max_length=100)
    lab=models.CharField(max_length=100)
    email_id=models.EmailField(max_length=100,blank=True)
    image=models.ImageField(upload_to="staff_members", blank=True)


class research_scholar(models.Model):
    name=models.CharField(max_length=100)
    research_area=models.CharField(max_length=100)
    supervisor=models.CharField(max_length=100)
    personal_website = models.CharField(max_length=100,blank=True)
    email_id=models.EmailField(max_length=100,blank=True)
    image=models.ImageField(upload_to="research_scholars", blank=True)



class event(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100, blank=True,null=True)
    concluded = models.BooleanField(default=False)
    dated_at = models.DateField(blank=True,null=True)


class lab(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=100,blank=True)
    


class gallery(models.Model):
    image = models.ImageField(upload_to="gallery")



class education(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100,blank=True)


class society(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100,blank=True)
    link = models.CharField(max_length=100,blank=True) 

