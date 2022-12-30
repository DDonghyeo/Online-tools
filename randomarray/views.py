from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import random

@csrf_exempt
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def generator(request):
    global results
    results = ""
    if request.method == 'POST':
        min = int(request.POST['min'])
        max = int(request.POST['max'])
        amount = int(request.POST['amount'])
        type = request.POST['type']
        separate = request.POST['separate']
        if (request.POST.get('duplicate') == None):
            duplicate = "off"
        else:
            duplicate = request.POST['duplicate']
        results = generate(min, max, amount, separate, type, duplicate)
    return render(request, 'generator.html',{'result' : results})


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
                array.append(str(min+i))
            for i in range(amount):
                rand = random.randint(0,len(array)-1)
                result = result + str(array[rand]) + sp
                array.pop(rand)
    #마지막 구분 빼기
    result = result[:-2]
    return result
    
@csrf_exempt
def converter(request):
    result = ""
    if request.method == 'POST':
        # 10 진수 -> x 진수 
        if int(request.POST['before']) == 10:
            result = convert(int(request.POST['beforeNum']), int(request.POST['after']))
        else:
            # x 진수 -> y 진수의 경우
            first = convert(int(request.POST['beforeNum']), 10) # x 진수 -> 10 진수 
            result = convert(first, int(request.POST['after'])) # 10 진수 -> y 진수
    return render(request, 'converter.html', {'result' : result})

def convert(n, q):
    r = ''
    
    while n > 0:
        n, mod = divmod(n, q)
        r += str(mod)
        
    return r[::-1]