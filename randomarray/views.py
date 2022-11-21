from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import random


# Create your views here.
@csrf_exempt
def index(request):
    global results
    results = ""
    if request.method == 'POST':
        min = int(request.POST['min'])
        max = int(request.POST['max'])
        amount = int(request.POST['amount'])
        type = request.POST['type']
        separate = request.POST['separate']
        results = generate(min, max, amount, separate, type)
    return render(request, 'index.html',{'result' : results})


def generate(min, max, amount, separate, type):
    result = ""
    if separate == "comma":
        sp = ","
    elif separate == "space":
        sp = " "
    if type == "int":
        for i in range(amount):
            result= result + str(random.randint(min, max)) + sp

    result = result[:-1]
    return result
