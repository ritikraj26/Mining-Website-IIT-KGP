from rest_framework import serializers
from .models import *




class faculty_members_serializer(serializers.ModelSerializer):
    class Meta:
        model = faculty_member
        fields = (
            'name',
            'phd_college',
            'research_area',
            'institute_webpage',
            'personal_website',
            'email_id',
            'image'
        )


class staff_members_serializer(serializers.ModelSerializer):
    class Meta:
        model = staff_member
        fields = (
            'name',
            'post',
            'contact',
            'lab',
            'image'
        )

class research_area_serializer(serializers.ModelSerializer):
    class Meta:
        model = research_area
        fields = (
            'topic',
            'description'
        )


class education_serializer(serializers.ModelSerializer):
    class Meta:
        model = education
        fields = (
            'name',
            'description'
        )


class society_serializer(serializers.ModelSerializer):
    class Meta:
        model = society
        fields = (
            'name',
            'description'
        )

class event_serializer(serializers.ModelSerializer):
    class Meta:
        model = event
        fields = (
            'name',
            'link',
            'concluded',
            'dated_at'
        )