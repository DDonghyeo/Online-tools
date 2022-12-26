alert('no!')
var duplicate = document.getElementById('min');
var icon = document.getElementById('icon');
var resut = document.getElementById('result');

function copy(){
    const copy = result => {
        window.clipboardData.setData("text", text);
      } 
      
      copy("IE 복사 테스트");
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

