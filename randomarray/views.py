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
        return render(request, 'generator.html',{'result' : results, 'min' : min, 'max' : max, 'amount' : amount, 'duplicate' : duplicate, 'seperate' : separate})
    return render(request, 'generator.html')


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
    try:
        if request.method == 'POST':
            # 10 진수 -> x 진수 
            if int(request.POST['before']) == 10:
                result = decimal_to_n_convert(int(request.POST['beforeNum']), int(request.POST['after']))
            else:
                # x 진수 -> y 진수의 경우
                first = int(request.POST['beforeNum'], int(request.POST['before'])) # x 진수 -> 10 진수 
                result = decimal_to_n_convert(first, int(request.POST['after'])) # 10 진수 -> y 진수
            return render(request, 'converter.html', {'result' : result, 'beforeNum' : request.POST['beforeNum']})
        return render(request, 'converter.html', {'result' : result})
    except:
        return render(request,'error.html')

def decimal_to_n_convert(n, base):
    T = "0123456789ABCDEF"
    q, r = divmod(n, base)

    return decimal_to_n_convert(q, base) + T[r] if q else T[r]
        
#-----------------------Power Calculator---------------------------
@csrf_exempt
def power(request):
    return(render(request,'powercalculator.html'))