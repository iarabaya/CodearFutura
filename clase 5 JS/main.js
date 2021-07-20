//hacer una peticion a la api de harry potter
let data = '';
fetch('https://hp-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(json => {
    json.forEach(e => {htmlPersonaje(e.name, e.image, e.house);});
});


//crear la funcion htmlPersonaje que tenga como parametro personaje, foto, casa
//con esta funcion mostrar la lista de personajes 
//con el metodo document.write()
function htmlPersonaje(personaje,foto,casa){
    
    document.write(
        `<div class='personaje'><h2>${personaje}</h2>
        <img class='imagenes' src=${foto} alt='foto de ${personaje}'>
        <p>Casa: ${casa} </p>
        </div>`
    );
}