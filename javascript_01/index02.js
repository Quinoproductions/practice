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