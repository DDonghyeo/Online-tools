var duplicate = document.getElementById('min');
duplicate.addEventListener('click', yes());

var icon = document.getElementById('icon');
icon.addEventListener('click', copy());

function copy(){
    alert('copied!')
}


window.onload = function yes(){
    alert('yes')
};

var main = document.getElementById('main');
main.addEventListener('click', yes());

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

