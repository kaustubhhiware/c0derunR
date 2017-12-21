from django.test import TestCase
from django.test import Client

# Create your tests here.
c = Client()
response = c.post('')
print(response.status_code())
