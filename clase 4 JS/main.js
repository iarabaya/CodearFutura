//para llegar a destino tenemos que caminar 100 pasos
//usar loop while y document.write, partiendo de 100 hasta llegar a destino


console.log("algo");

let pasos = 100;
console.log(pasos);
while (pasos >= 0){
    
    if(pasos == 1){
        document.write("Solo falta " + pasos +" paso por caminar, <br>");

    }else if(pasos == 0){
        document.write("Llegaste a destino");
    }else{
        document.write("Solo faltan " + pasos +" pasos por caminar. <br>");
    }
    pasos = pasos - 1;
}

let numeros = [
    [2,4],
    [4,7],
    [9,56],
    [1,3],
]


function sumarArray(array){
    let total = 0;

    for (let index = 0; index < array.length; index++) {
        let primerNum = array[index][0];
        let segundoNum = array[index][1];
        total += primerNum * segundoNum; 
    }
    return total;
}

let listaNumeros = [1,34,20,19,5,8];
let nuevaLista = listaNumeros.map( obj => { 
    if(obj % 2 === 0){
        return "El numero "+ obj +" es par.";
    }else{
        return "El numero "+ obj +" es impar.";
    }
});
console.log(nuevaLista);

//array de strings y filtrar en nombresCortos aquellos que tengan menos de 5 letras
let nombres = ["Carla", "Luciana", "Florencia", "Sol", "Luz", "Marianela", "Ana"];
let nombresCortos = nombres.filter( nombre => nombre.length < 5 );
console.log(nombresCortos); // ["Sol", "Luz", "Ana"]
