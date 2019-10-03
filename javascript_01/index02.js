let cantidad = window.prompt('ingresa la cantidad de integrantes de tu familia');
const family = [];
for (let i = 0; i < cantidad; i++) {
    let name = window.prompt('ingresa tu nombre');
    let lastname = window.prompt('ingresa tu apellido');
    let email = window.prompt('ingresa tu email')
    let hashhobbies = window.prompt('indique la cantidad de hobbies');
    const hobbies = [];
    if (hashobbies !== '0'){
        for (let j = 0; j < hashobbies; j++) {
            let hobbie = window.prompt('nombre del hobbie');
            hobbies[j] = hobbies;
        }
    }
    family[i] = {
        nombre: name,
        apellido: lastname,
        email: email
    };
    if (hobbies.lenght !== 0) {
        family[i].hobbies = hobbies;
    }
}

console.log(family);


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
        break;}

