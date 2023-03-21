function solve(x) {
    var v = document.getElementById('inputBox');
    v.value += x;
 }
 function result() {
    var num1 = document.getElementById('inputBox').value;
    var num2 = eval(num1);
    document.getElementById('inputBox').value = num2;
 }
 function clear(){
    var inp = document.getElementById('inputBox');
    inp.value = "";
 }
 function del() {
    var ev = document.getElementById('inputBox');
    ev.value = ev.value.slice(0,-1);
 }