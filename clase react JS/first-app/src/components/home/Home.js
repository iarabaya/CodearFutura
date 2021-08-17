import React, {useEffect, useState} from 'react';
import './home.css';
import Intro from '../intro/Intro';
import CustomButton from '../button/CustomButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardPersonaje from '../cardPersonaje/cardPersonaje';


const Home = () =>{

    const [personajes, setPersonajes] = useState();


    useEffect(() => {
        fetch('https://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(personajes => setPersonajes(personajes));
    })

    return (
        <div className="home">
            <Intro nombre="Iara Baya"/>
             <CustomButton text="un boton"/>

            <Container>
                <Row>
                    {personajes? 
                        personajes.map((personaje,index)=>{
                            return (<CardPersonaje key={index} nombre={personaje.name} image={personaje.image} house={personaje.house}/>)})
                        : 
                        <p>Cargando personajes...</p>}
                </Row>
            </Container>
        </div>
    );
}


export default Home;