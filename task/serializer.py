from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #campos = ('id', 'titulo', 'descripcion', 'hecho')
        fields = '__all__'