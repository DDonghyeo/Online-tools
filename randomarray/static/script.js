var duplicate = document.getElementById('min')
var icon = document.getElementById('icon')
var result = document.getElementById('result')
var btn = document.getElementById('generate')
var form = document.getElementsByName('min')
var copybtn = document.getElementById("copy")
console.log(copybtn)

copybtn.addEventListener("click",copy)

function copy() {
    var obj = document.getElementById("result");
    var range = document.createRange();
    range.selectNode(obj.childNodes[0]);  //텍스트 정보를 Range 객체에 저장
    var sel = window.getSelection();
    sel.removeAllRanges();  //기존 선택정보 삭제
    sel.addRange(range);  //텍스트 정보 선택
    document.execCommand("copy");  //복사
    sel.removeRange(range);  //선택 정보 삭제
    alert("copied!")
  }

function check(){
    print("yes")
    var min = document.getElementById('min');
    var max = document.getElementById('max');
    var amount = document.getElementById('amount');
    var generate = document.getElementById('generate');
    if (duplicate == 'off'){
        if ((min+max)<amount){
            generate.disabled = true;
        }
        else{
            generate.disabled = false;
        }

    }
}



