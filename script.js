let num1 = document.querySelector('#n1');
let num2 = document.querySelector('#n2');
let out = document.getElementById('out');
function showSumm(){
    let result = Number(num1.value) + Number(num2.value);
    out.innerHTML = result; }
function showSubtraction() {
   let result = (num1.value) - (num2.value);
out.innerHTML = result;
}
function showMultiplication() {
    let result = (num1.value) * (num2.value);
    out.innerHTML = result ; }          
function showSegmentation() {
    if (num2.value == 0){
        alert ('На ноль делить нельзя!');
    }
    else
    result = (num1.value)/(num2.value);
    out.innerHTML = result ;
}              
function select(sender){
    sender.classList.add("selected");
}
