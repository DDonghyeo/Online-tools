var before = document.getElementById("beforeNum")
var copybtn = document.getElementById("copy")

copybtn.addEventListener("click",copy)
before.addEventListener("keyup",convertcheck);

function isInt(num){
    return num %1 === 0;
}
//진수변환기 유효성 검사
function convertcheck(){
    var before = document.getElementById("beforeNum").value;
    var btn = document.getElementById("btnconvert");
    if(before == ""){
        btn.disabled = true;
        return
    }else btn.disabled = false;

    if(isInt(before)){
        btn.disabled = false;
    }else btn.disabled = true;
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