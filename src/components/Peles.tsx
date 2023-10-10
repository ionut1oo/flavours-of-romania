import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/peles.css';

const Peles = () => {
  return (
    <Container className='peles-container'>
        <img className='peles-castel' src='imgs/peles.jpg' alt='Peles Castel' /> 
        <h3 className='title-peles'> Peles Castel </h3>
        <div className='description'> 
           <p> Built as the summer residence of the kings of Romania, the building  is <br /> currently owned by the Royal Family of Romania and houses the Peleș <br /> National Museum. </p>
           <p> Peleș Castle is a palace in Sinaia, built between 1873 and 1914. </p>
           <hr className='peles-horizontal'/>
        </div>
    </Container>
  )
}

export default Peles;