from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from operator.models import Operation
from operator.serializers import OperationSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def operation_list(request):
    # GET list of operation, POST new operation, DELETE all operations
    if request.method == 'GET':
        operations = Operation.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            operations = operations.filter(title__icontains=title)
        
        operations_serializer = OperationSerializer(operations, many=True)
        return JsonResponse(operations_serializer.data, safe=False)
    # 'safe=False' for objects serialization
    elif request.method == 'POST':
        operation_data = JSONParser().parse(request)
        operation_serializer = OperationSerializer(data=operation_data)
        if operation_serializer.is_valid():
            operation_serializer.save()
            return JsonResponse(operation_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(operation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def operation_detail(request, pk):
    # find operation by pk (id)
    try: 
        operation = Operation.objects.get(pk=pk) 
    except Operation.DoesNotExist: 
        return JsonResponse({'message': 'The operation does not exist'}, status=status.HTTP_404_NOT_FOUND) 

    
    