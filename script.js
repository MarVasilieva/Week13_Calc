let num1;
let num2;

let out = document.getElementById('out');
//сложение
function showSumm(){
    num1 = document.getElementById('n1').value;
    num1 = (num1); 
    num1 = document.getElementById('n2').value;
    num2 = parseInt(num2);
     
    out.innerHTML = num1 + num2;
}
function showSubtraction() {
    num1 = document.getElementById('n1').value; 
    num2 = document.getElementById('n2').value;

    out.innerHTML = num1 - num2;
   }
   function showMultiplication() {
    num1 = document.getElementById('n1').value; 
    num2 = document.getElementById('n2').value;

    out.innerHTML = num1 * num2;
   }            
   function showSegmentation() {
    num1 = document.getElementById('n1').value; 
    num2 = document.getElementById('n2').value;

    out.innerHTML = num1/num2;
   }                
   
   function select(sender){
    sender.classList.add("selected");
   }