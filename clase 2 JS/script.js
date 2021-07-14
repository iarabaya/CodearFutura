function saludo(nombre, apellido){
    console.log('Hola ' + nombre, apellido + "!")
}

saludo('Hermione', 'Granger');

function longitudNombre(nombre){
  return nombre.length;
}

let nombre = 'Ana';
let longitud = longitudNombre(nombre);

console.log("el nombre " + nombre + " tiene " + longitud + " letras");