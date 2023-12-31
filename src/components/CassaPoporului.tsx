import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/palaceOfParlament.css'

const PalaceOfParlament = () => {
    return (
        <Container className='parlament-container'>
            <img className='parlament' src="imgs/casa-poporului.jpg" alt="Palace of Parlament" />
            <h3 className='parlament-title'> Palace Of Parlament </h3>
            <div className='parlament-description'>
               <p> The Palace of the Parliament also known as the People's House is the <br /> seat of the Parliament of Romania, located in Bucharest, the national <br /> capital. </p>
               <p> The Palace reaches a height of 84 m has a floor <br /> area of  365,000 m2 and a volume of 2,550,000 m3 </p>
               <hr className='parlament-horizontal'/>
            </div>
        </Container>
    )
}

export default PalaceOfParlament;