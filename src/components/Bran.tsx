import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/bran.css'


const Bran = () => {
    return (
        <Container>
           <hr className='horizontal-line-top' />
           <h3 className='title'> Bran Castel </h3> 
           <img className='castel' src='/imgs/bran.jpg' alt='Bran Castel' />
           <div className='bran-description'>
             <p> Bran Castle is one of the most popular castles <br /> in Romania. </p>
             <p> The legend of Dracula makes Bran Castle one <br /> of the most sought-after tourist attractions <br /> in the country. </p>
             <p> Bran is less than 30 km from Brasov. </p>
           </div>
           <hr className='horizontal-line-bottom' />
           <span className='vl-l'></span>
           <span className='vl-r'></span>
        </Container>
    )
}

export default Bran;