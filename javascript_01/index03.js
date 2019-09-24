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