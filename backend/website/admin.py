from django.contrib import admin

from .models import research_topics, faculty_members, awards_and_recognitions, publications, staff_members, timetables

admin.site.register(research_topics)
admin.site.register(faculty_members)
admin.site.register(awards_and_recognitions)
admin.site.register(publications)
admin.site.register(staff_members)
admin.site.register(timetables)
