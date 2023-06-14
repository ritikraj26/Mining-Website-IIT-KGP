from django.urls import path
from . import views

urlpatterns = [
    path('faculty_members/',views.faculty_members_api),
    path('awards_and_recognition/',views.awards_and_recognitions_api),
    path('publicaions/',views.publications_api),
    path('staff_members/',views.staff_members_api),
    path('timetables/',views.timetables_api),
]