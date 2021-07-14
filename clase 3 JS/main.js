/*let lista = ["galletitas", "azucar","harina", "jugo de naranja", "leche"];
let articulo = window.prompt('Ingrese el articulo que desea agregar a la lista de compras: ');

if(lista.includes(articulo)){
    console.log('El articulo ya está en la lista');
}else{
    lista.push(articulo);
    alert('La lista es ' + lista)
    console.log(lista);
}
*/

const hoy = new Date().getDay();
let dia;

switch (hoy) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break; 
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
        break;
}
/*
console.log("El dia de hoy es "+ dia);

let valor = window.prompt('Ingrese un numero');

if(valor > 10){
    document.write(`el numero ${valor} es mayor a 10`);
}else if(valor <= 10){
    document.write(`el numero ${valor} es menor o igual a 10`);
}else{
    document.write(`ingresaste ${valor} que no es un numero`);
}
*/

let  numeroIngresado = window.prompt('Ingrese su numero de la suerte: ');

function esNumeroDeLaSuerte(num){
    if (num >= 0 && num != 15 && (num%2 == 0|| num%3 == 0)){
        alert('El numero ' + num + ' es de la suerte.');
    }else{
        alert('El numero ' + num + ' no es de la suerte.');
    }
}

esNumeroDeLaSuerte(numeroIngresado);