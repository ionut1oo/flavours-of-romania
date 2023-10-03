import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/peles.css';

const Peles = () => {
  return (
    <Container>
       <img className='peles-castel' src='/imgs/peles.jpg' alt='Peles Castel' /> 
       <div className='description'> 
         <h3 className='title-peles'> Peles Castel </h3>
         <p> Built as the summer residence of the kings of Romania, the building  is <br /> currently owned by the Royal Family of Romania and houses the Peleș <br /> National Museum. </p>
         <p> Peleș Castle is a palace in Sinaia, built between 1873 and 1914. </p>
         <hr className='horizontal-peles'/>
       </div>
       <span className='vertical-line'></span>
    </Container>
  )
}

export default Peles;