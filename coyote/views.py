from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from urlparse import urlparse

import requests
from bs4 import BeautifulSoup

# Constants
RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
CLIENT_SECRET = '4dfd962b7931b9b7833159cf6a38dde05f88ef54'

AZURE_NLP = u'https://text-analytics-demo.azurewebsites.net/Demo/Analyze'
BING_SEARCH_API_KEY = '19d0dfef006d49bb9e167fcc66d1db77'

BING_URL = 'http://api.cognitive.microsoft.com/bing/v5.0/'

## Proxy declaration for KGP
http_proxy = "http://10.3.100.207:8080"
https_proxy = "http://10.3.100.207:8080"


def get_domain(url):
    """
    Given a url return its domain
    """
    parsed_uri = urlparse(url)
    return(parsed_uri.netloc)


def home(request):
    if request.method == 'POST':
        # POST goes here . is_ajax is must to capture ajax requests.
        if request.is_ajax():
            lang = request.POST.get('lang')
            source = request.POST.get('source')
            inputl = request.POST.get('input')
            data = {"lang": lang, "source": source, "input": inputl}

            data = {
                'client_secret': CLIENT_SECRET,
                'async': 0,
                'source': source,
                'lang': lang,
                'input': inputl,
                'time_limit': 5,
                'memory_limit': 262144,
            }

            # Post data to HackerEarth API
            s = requests.Session()
            s.mount("http://", requests.adapters.HTTPAdapter(max_retries=5))
            s.mount("https://", requests.adapters.HTTPAdapter(max_retries=5))
            r = s.post(RUN_URL, data=data)
            # extract important key words using azure api (of course I have done some smart things for it!)
            key_words = []
            compile_status = r.json()['compile_status'].strip()
            current_json = r.json()
            if compile_status != 'OK':
                nlp_req = s.get(AZURE_NLP, data={'inputText': str(compile_status)})
                content = BeautifulSoup(nlp_req.text, 'lxml')
                keywords_class = content.find_all('div', attrs={'class': 'row top-buffer'})[1]
                key_words = keywords_class.find_all('div')[1].find_all('mark')
                for idx in range(len(key_words)):
                    key_words[idx] = key_words[idx].text

                key_words.append(compile_status)
                links = []
                desc = []
                import re
                for word in reversed(key_words):
                    page = s.get("https://www.google.co.in/search?q=" + word)
                    soup = BeautifulSoup(page.content, 'lxml')
                    links_ = soup.findAll("a")
                    for link in soup.find_all("a", href=re.compile("(?<=/url\?q=)(htt.*://.*)")):
                        debug_url = link["href"].replace("/url?q=", "").split('&')[0]
                        if 'webcache.googleusercontent.com' in debug_url:
                            continue
                        links.append(debug_url)
                        desc_ = link.text
                        desc_ += ":" + get_domain(debug_url)
                        desc.append(desc_)

                current_json['debug_urls'] = links[:10]
                current_json['descriptions'] = desc[:10]
            return JsonResponse(current_json, safe=False)
    # Get goes here
    return render(request, 'init.html')


def codeplay(request):
    return render(request, 'codeplay.html')
