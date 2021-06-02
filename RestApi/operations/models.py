from django.db import models


# Create your models here.
class Operation(models.Model):
    data = models.JSONField(default=dict)