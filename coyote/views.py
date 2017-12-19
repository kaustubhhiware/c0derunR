from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from urlparse import urlparse

# for sending requests and parsing response
import requests
from bs4 import BeautifulSoup

# for extracting keywords from error messages
from rake_nltk import Rake

# Constants
RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
CLIENT_SECRET = '41662da152e210d7610787a8596e45cda8638dde'

    
def get_domain(url):
    """
    Parameters:
    url[string] => uniform resource locator of website
    --------------------------------------------
    Returns:
    parsed_uri.netloc [string] => the domain name in url
    Logic:
    Given a url return its domain
    """

    parsed_uri = urlparse(url)
    return(parsed_uri.netloc)


def home(request):
    """
    Parameters:
    request[HttpRequest] 
    --------------------------------------------
    Returns:
    render(request, 'init.html') [HttpResponse] => init.html is returned as HttpResponse
    Logic:
    it takes the inputted code from frontend request and sends it to hackerearth API
    if the code doesn't compile, then it finds the necessary keyword from error messages 
    and searches for it on google with regex matching and suggests debug links 
    """

    
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

            key_words = []
            compile_status = r.json()['compile_status'].strip()
            current_json = r.json()
            if compile_status != 'OK':
                rk = Rake()
                rk.extract_keywords_from_text(compile_status)
                for keyword in rk.get_ranked_phrases():
                    if 'hackerearth' in keyword:
                        continue
                    key_words.append(keyword)

                # filter extra information
                if len(key_words) >= 3:
                    key_words = key_words[-2:]
                key_words = list(reversed(key_words))
                key_words.append(compile_status)

                links = []
                desc = []
                import re
                for word in key_words:
                    page = s.get("https://www.google.co.in/search?q=" + word)
                    soup = BeautifulSoup(page.content, 'lxml')
                    for link in soup.find_all("a", href=re.compile("(?<=/url\?q=)(htt.*://.*)")):
                        debug_url = link["href"].replace("/url?q=", "").split('&')[0]
                        if 'webcache.googleusercontent.com' in debug_url:
                            continue
                        links.append(debug_url)
                        desc.append(link.text + ":" + get_domain(debug_url))

                current_json['debug_urls'] = links[:10]
                current_json['descriptions'] = desc[:10]
            return JsonResponse(current_json, safe=False)

    # A normal get request goes here
    return render(request, 'init.html')


def codeplay(request):
    """
    Parameters:
    request[HttpRequest] 
    --------------------------------------------
    Returns:
    render(request, 'codeplay.html') [HttpResponse] 
                => codeplay.html is returned as HttpResponse
    Logic:
    re-renders the codeplay page
    """
    
    return render(request, 'codeplay.html')
    