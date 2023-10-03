import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/palaceOfParlament.css'

const PalaceOfParlament = () => {
    return (
        <Container>
          <hr className='horizontal-parlament'/>
           <h3 className='parlament-title'> Palace Of Parlament </h3>
           <img className='parlament' src="/imgs/casa-poporului.jpg" alt="Palace of Parlament" />
           <div className='parlament-description'>
             <p> The Palace of the Parliament also known as the People's House is the <br /> seat of the Parliament of Romania, located in Bucharest, the national <br /> capital. </p>
             <p> The Palace reaches a height of 84 m has a floor <br /> area of  365,000 m2 and a volume of 2,550,000 m3 </p>
           </div>
           <span className='parlament-vert-r'></span>
        </Container>
    )
}

export default PalaceOfParlament;