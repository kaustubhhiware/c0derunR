from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse

import requests

# Constants
RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
CLIENT_SECRET = '4dfd962b7931b9b7833159cf6a38dde05f88ef54'

def home(request):
    if request.method == 'POST':
        # POST goes here . is_ajax is must to capture ajax requests.
        if request.is_ajax():
            lang = request.POST.get('lang')
            source = request.POST.get('source')
            data = {"lang": lang, "source": source}

            data = {
                'client_secret': CLIENT_SECRET,
                'async': 0,
                'source': source,
                'lang': lang,
                'time_limit': 5,
                'memory_limit': 262144,
            }

            # Post data to HackerEarth API
            r = requests.post(RUN_URL, data=data)
            return JsonResponse(r.json(), safe=False)
    # Get goes here
    return render(request, 'init.html')


def codeplay(request):
    return render(request, 'codeplay.html')
