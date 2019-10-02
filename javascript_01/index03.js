document.getElementById('button').addEventListener('click',click,true);

 function click(){
     alert('esto fue activado por el boton');
 }

 document.getElementById('mi_div').addEventListener('click',another_click,false);

 function another_click(){
     alert('esto fue activado por el div');
 }

 const runAlert= () => {
     alert('hola guachin');
 }

 function fnFocus() {
     console.log('entre al input')
 }

 const fnBlur = function() {
    const text = document.getElelementById('text');
    const error = document.getElementById('error');
    if(text.value === '') {
        text.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        text.style.border = '1px solid grey';
        error.style.display = 'none';
    }
    console.log('sali del elemento', text.value);
 }

 const fnInput = () => {
     const text = document.getElementById('text')
     document.getElementById('result').innerHTML = text.value;
     console.log('on input', text.value);
 }

 const mostraralert = () => {
     alert('que onda guachin')
 }

 mostraralert();

 function doFocus() {
     console.log('hiciste focus');
     const t = document.getElementById('my_input');
     const p = document.getElementById('my-error');
    t.style.background = 'orange';
    t.style.border = '1px solid black';
    p.style.display = 'none'
 }

 
 const doBlur = function() {
    console.log('Saliste del input!');
    const t = document.getElementById('my-input');
    const p = document.getElementById('my-error');
    if(t.value === '') {
        t.style.backgroundColor = 'orange';
        t.style.border = '1px solid red';
        p.style.display = 'block';
    }
  }
const doInput = () => {
    const t = document.getElementById('my-input');
    console.log(t.value);
const operacion = prompt('¿que tipo de operacion desea realizar?' );
const v1 = prompt('ingrese valor');
const v2 = prompt('ingrese valor');

switch (operacion) {
    case 'suma':
        console.log( parseFloat(v1) + parseFloat(v2));
        break;
    case 'resta':
        console.log( parseFloat(v1) - parseFloat(v2));    
        break;
    case 'multiplicacion': 
            console.log( parseFloat(v1) * parseFloat(v2));
            break;
    case 'division': 
            console.log( parseFloat(v1) / parseFloat(v2));
            break;    
    default:
        console.log('la operacion indicada no existe');
        break;
}