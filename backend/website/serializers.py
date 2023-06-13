from rest_framework import serializers
from .models import research_topics, faculty_members, awards_and_recognitions, publications, staff_members, timetables


class research_topics_serializer(serializers.ModelSerializer):
    class Meta:
        model = research_topics
        fields = (
            'topic',
            'description',
        )


class faculty_members_serializer(serializers.ModelSerializer):
    class Meta:
        model = faculty_members
        fields = (
            'first_name',
            'last_name',
            'email_id',
            'research_interest',
            'image',
        )


class awards_and_recognitions_serializer(serializers.ModelSerializer):
    class Meta:
        model = awards_and_recognitions
        fields =(
            'faculty',
            'description'
        )


class publications_serializer(serializers.ModelSerializer):
    class Meta:
        model = publications
        fields = (
            'title',
            'description',
            'image'
        )


class staff_members_serializer(serializers.ModelSerializer):
    class Meta:
        model = staff_members
        fields = (
            'first_name',
            'last_name',
            'post',
            'email_id',
        )


class timetables_serializer(serializers.ModelSerializer):
    class Meta:
        model = timetables
        fields = (
            'semester',
            'year',
            'summary',
            'faculty_wise_teaching_slot',
            'faculty_wise_timetable',
            'teaching_assistant_loading',
            'specialization_wise_allocation',
        )