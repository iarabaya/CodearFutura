import React from 'react';
import './home.css';
import Intro from '../intro/Intro';
import CustomButton from '../button/CustomButton';
const Home = () =>{
    return (
        <div className="home">
            <Intro nombre="Iara Baya"/>
             <CustomButton text="un boton"/>
        </div>
    );
}

export default Home;