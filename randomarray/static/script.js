var min = document.getElementById('min')
var max = document.getElementById('max')
var amount = document.getElementById('amount')
var checkbox = document.getElementById('checkbox')
var copybtn = document.getElementById("copy")

copybtn.addEventListener("click",copy)
min.addEventListener("keyup",check)
max.addEventListener("keyup",check)
amount.addEventListener("keyup",check)
checkbox.addEventListener("click",check)


//체크박스 유지
if(document.getElementById("duch").innerHTML == "off"){
    console.log(document.getElementById("duch").innerHTML)
    checkbox.checked = false;
}

//구분 유지
if(document.getElementById("seperated").innerHTML == "space"){
    document.getElementById("comma").selected = false;
    document.getElementById("space").selected = true;
}


function copy() {
    var obj = document.getElementById("result");
    var range = document.createRange();
    range.selectNode(obj.childNodes[0]);  //텍스트 정보를 Range 객체에 저장
    var sel = window.getSelection();
    sel.removeAllRanges();  //기존 선택정보 삭제
    sel.addRange(range);  //텍스트 정보 선택
    document.execCommand("copy");  //복사
    sel.removeRange(range);  //선택 정보 삭제
    alert("copied!");
  }

function isInt(num){
    return num %1 === 0;
}


function check(){
    var min = parseInt(document.getElementById('min').value)
    var max = parseInt(document.getElementById('max').value)
    var amount = parseInt(document.getElementById('amount').value)
    var generate = document.getElementById('generate');
    var warning = document.getElementById('warning')

    //중복 허용 X일 경우
    if (!document.getElementById('checkbox').checked){
        if (( max - min + 1 )<amount){
            generate.disabled = true;
            warning.innerHTML = "Can't generate in range.";
            warning.style.display = "block";
            return
        }
        else{
            generate.disabled = false;
            warning.style.display = "none"
        }
    }

    //최소값이 최대값보다 클 경우
    if(min>max){
        console.log(min, max)
        console.log(Number.isInteger(min))
        generate.disabled = true;
        warning.innerHTML = "min value is larger than max value."
        warning.style.display = "block"
        return
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }

     //정수가 아닌 값이 입력됐을 경우
     if (!isInt(min) || !isInt(max) || !isInt(amount)){
        generate.disabled = true;
        warning.innerHTML = "Only integer is allowed."
        warning.style.display = "block"
        return
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }

    //아무 값을 입력하지 않았을 경우
    if (min == "" || max == "" || amount == "" || !isInt(min) || !isInt(max) || !isInt(amount)){
        generate.disabled = true;
        warning.innerHTML = "Input the value."
        warning.style.display = "block"
    }else {
        generate.disabled = false;
        warning.style.display = "none"
    }
   
}

//side nav toggle
window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

check();