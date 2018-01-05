from django.test import TestCase
from django.test import Client
import unittest
# Create your tests here.
CLIENT_SECRET = '41662da152e210d7610787a8596e45cda8638dde'


class BasicTest(TestCase):
    def setup(self):
        self.client = Client()

        self.data = {
            'lang' = C,
            'source' =
            "#include<stdio.h> #include<stdlib.h>
            void main()
            {
                printf("Welcome to Coder run");
            }
                        "
            'input' =,
        }

    def testing_response(self):
        self.assertTrue(handler404.endswith('.page_not_found'))
        self.assertTrue(handler500.endswith('.internal_server_error'))
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        response = self.client.get('/htmlviewer')
        self.assertEqual(response.status_code,200)

    def sample_codes(self):
        response = self.client.post(self.data[lang])
