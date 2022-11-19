from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import random


# Create your views here.
@csrf_exempt
def index(request):
    return render(request, 'index.html')


def generate(min, max, amount, separate, type):
    result = []
    if type == "int":
        for i in range(amount):
            result.append(random.randint(min, max))
    else:
        return 0
    return result


@csrf_exempt
def create(request):
    if request.method == 'POST':
        min = request.POST['min']
        max = request.POST['max']
        amount = request.POST['amount']
        type = request.POST['type']
        separate = request.POST['separate']
        print(min,max,amount,type,separate)
    return render(request, 'index.html')
