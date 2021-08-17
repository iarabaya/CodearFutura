import React from 'react'
import Col from 'react-bootstrap/Col';

function cardPersonaje({nombre,image,house}) {

    return (
        <Col sm={4}>
            <div>
                <h3>{nombre}</h3>
                <img src={image} alt={nombre}></img>
                <p>{house}</p>
            </div>
        </Col>
    )
}

export default cardPersonaje
