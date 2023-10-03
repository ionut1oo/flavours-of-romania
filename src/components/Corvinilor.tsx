import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/corvinilor.css';


const Corvinilor = () => {
    return (
        <Container>
           <h3 className='corvinilor-title'> Corvinilor Castel </h3>
           <img className='corvinilor' src='/imgs/corvinilor-castel.jpg' alt='corvinilor-castel' />
           <div className='corvinilor-description'>
             <p> Corvinilor Castle is the medieval fortress of Hunedoara, <br /> one of the most important monuments of Gothic <br /> architecture in Romania. </p>
             <p> It is considered one of the most beautiful castles <br /> in the  world, being located in the top 10 fairytale <br /> destinations in Europe. </p>
           </div>
           <span className='vert-line-right'></span>
        </Container>
    )
}

export default Corvinilor;