from re import L
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
from .models import Employee
from .serializers import EmployeeSerializer
import psycopg2



@csrf_exempt
def uploadApi(request):
    conn = psycopg2.connect(dbname="filedata" ,user="financepeer",password="admin")
    cur = conn.cursor()
    if(request.method=='POST'):
        try:
            data=request.body
            datajson=json.loads(data)
            for el in datajson:
                employee_id=el.get("id")
                user_id=el.get("userId")
                title=el.get("title")
                body=el.get("body")
                #print(str(el))
                cur.execute("INSERT INTO task_employee(employee_id,user_id,title,body) VALUES(%s,%s,%s,%s)",
                                (employee_id,user_id,title,body))
            conn.commit()
            cur.close()
            conn.close()
            return JsonResponse("Data Uploaded Successfully !!!",safe=False)
        except:
            return JsonResponse("Error in json data pls check !!!",safe=False)


@csrf_exempt
def employeeApi(request,id=None):
    if(request.method=='GET'):
        employees=Employee.objects.all()
        employees_serializer=EmployeeSerializer(employees,many=True)
        print(str(request))
        return JsonResponse(employees_serializer.data,safe=False)
    elif(request.method=='POST'):
        employee_data=JSONParser().parse(request)
        employee_data_serializer=EmployeeSerializer(data=employee_data)
        if employee_data_serializer.is_valid():
            employee_data_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to add due to error in data",safe=False) 

    elif(request.method=='PUT'):
        employee_data=JSONParser().parse(request)
        employee=Employee.objects.get(employee_id=employee_data['employee_id'])
        employee_serializer=EmployeeSerializer(employee,data=employee_data)
        if(employee_serializer.is_valid()):
            employee_serializer.save()
            return JsonResponse("Update data successfully",safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif (request.method=='DELETE'):
        employee=Employee.objects.get(employee_id=id)
        employee.delete()
        return JsonResponse("Deleted Successfully",safe=False)




       
       


