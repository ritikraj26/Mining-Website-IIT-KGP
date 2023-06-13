from django.contrib import admin

from .models import research_topics, faculty_members, awards_and_recognition, publications, staff_members, timetable

admin.site.register(research_topics)
admin.site.register(faculty_members)
admin.site.register(awards_and_recognition)
admin.site.register(publications)
admin.site.register(staff_members)
admin.site.register(timetable)
