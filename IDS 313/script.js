var val1 = parseInt(document.getElementById('val1').value);

var val2 = parseInt(document.getElementById('val2').value);

var result = document.getElementById('result');

function multiply(){
result.innerHTML  = val1 * val2;
}

function divide(){
result.innerHTML  = val1 / val2;
}

function add(){
result.innerHTML  = val1 + val2;
}

function subtract(){
result.innerHTML  = val1 - val2;
}

function modulo(){
result.innerHTML  = val1 % val2;
}
