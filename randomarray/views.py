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
        duplicate = request.POST['duplicate']
        print(duplicate)
        results = generate(min, max, amount, separate, type,duplicate)
    return render(request, 'index.html',{'result' : results})


def generate(min, max, amount, separate, type, duplicate):
    result = ""
    if separate == "comma":
        sp = ", "
    elif separate == "space":
        sp = " "
    
    
    if (type == "int") :
        #중복 허용
        if duplicate == "on":
            for i in range(amount):
                result= result + str(random.randint(min, max)) + sp
        #중복 허용하지 않음
        if duplicate == "off":
            array = []
            for i in range(max):
                array.append(str(i))
            for i in range(amount):
                result = result + str(array[random.randint(0,len(array))]) + sp
                array = ''.join(array).split()
    #마지막 구분 빼기
    result = result[:-1]
    return result
