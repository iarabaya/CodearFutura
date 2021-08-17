import React , {useState, useEffect} from 'react';
import './contacto.css';

export default function Contacto() {
  const [contador, setContador] = useState(0);
  
  const sumaContador = () =>{
    setContador(contador + 1);
  }

  useEffect(()=>{
    console.log('El componente se renderizó');
  })

  return (
        <div>
          <h1>Puedes contactarme aqui.</h1>  
          <h2>Contador: {contador}</h2>
          <button onClick={sumaContador}>Sumar</button>          
        </div>
    )
}
