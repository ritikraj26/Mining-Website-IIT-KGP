from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import research_topics, faculty_members, awards_and_recognitions, publications, staff_members, timetables
from .serializers import research_topics_serializer, faculty_members_serializer, awards_and_recognitions_serializer, publications_serializer, staff_members_serializer, timetables_serializer


@csrf_exempt
def research_topics_api(request):
    if request.method == 'GET':
        list = research_topics.objects.all()
        serialized_list = research_topics_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False)


@csrf_exempt
def faculty_members_api(request):
    if request.method == 'GET':
        list = faculty_members.objects.all()
        serialized_list = faculty_members_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False)

 

@csrf_exempt
def awards_and_recognitions_api(request):
    if request.method == 'GET':
        list = awards_and_recognitions.objects.all()
        serialized_list = awards_and_recognitions_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False)  
    

@csrf_exempt
def publications_api(request):
    if request.method == 'GET':
        list = publications.objects.all()
        serialized_list = publications_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False)  
    

@csrf_exempt
def staff_members_api(request):
    if request.method == 'GET':
        list = staff_members.objects.all()
        serialized_list = staff_members_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False) 
    

@csrf_exempt
def timetables_api(request):
    if request.method == 'GET':
        list = timetables.objects.all()
        serialized_list = timetables_serializer(list, many=True)
        return JsonResponse(serialized_list.data, safe=False)

