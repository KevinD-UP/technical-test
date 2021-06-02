from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from operations.models import Operation
from operations.serializers import OperationSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def operation_list(request):
    # GET list of operation, POST new operation, DELETE all operations
    if request.method == 'GET':
        operations = Operation.objects.all()
        
        ville = request.GET.get('ville', None)
        if ville is not None:
            operations = operations.filter(data__icontains=ville)
        
        etat_d_avancement = request.GET.get('etat_d_avancement', None)
        if etat_d_avancement is not None:
            operations = operations.filter(data__icontains=etat_d_avancement)
        
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

    elif request.method == 'DELETE':
        count = Operation.objects.all().delete()
        return JsonResponse({'message': '{} Operations were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
@api_view(['GET', 'PUT', 'DELETE'])
def operation_detail(request, pk):
    # find operation by pk (id)
    try: 
        operation = Operation.objects.get(pk=pk) 
    except Operation.DoesNotExist: 
        return JsonResponse({'message': 'The operation does not exist'}, status=status.HTTP_404_NOT_FOUND) 

    if request.method == 'GET': 
        operation_serializer = OperationSerializer(operation) 
        return JsonResponse(operation_serializer.data) 

    elif request.method == 'PUT': 
        operation_data = JSONParser().parse(request) 
        operation_serializer = OperationSerializer(operation, data=operation_data) 
        if operation_serializer.is_valid(): 
            operation_serializer.save() 
            return JsonResponse(operation_serializer.data) 
        return JsonResponse(operation_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        operation.delete() 
        return JsonResponse({'message': 'Operation was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
    