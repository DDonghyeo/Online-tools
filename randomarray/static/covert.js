var before = document.getElementById("before")
before.addEventListener("keyup",convertcheck);

//진수변환기 유효성 검사
function convertcheck(){
    var before = document.getElementById("before").value;
    var after = document.getElementById("after").value;
    var btn = document.getElementById("btnconvert");
    if(before == "" || after == ""){
        btn.disabled = true;
    }else btn.disabled = false;
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