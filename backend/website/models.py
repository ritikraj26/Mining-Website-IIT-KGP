from django.db import models

class research_topics(models.Model):
    topic=models.CharField(max_length=100)
    descriprion=models.CharField(max_length=500)

class faculty_members(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email_id=models.EmailField(max_length=200)
    research_interest=models.ForeignKey(research_topics,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images')