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

console.log(sumarArray(numeros));
