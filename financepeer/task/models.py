from django.db import models



class Employee(models.Model):
    employee_id=models.IntegerField(primary_key=True)
    user_id=models.IntegerField()
    title=models.CharField(max_length=1000)
    body=models.CharField(max_length=1000)