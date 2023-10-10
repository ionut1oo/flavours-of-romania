import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/cemetery.css'

const Cemetery = () => {
   return (
    <Container className='cemetery-container'>
        <h3 className='cemetery-title'> Merry Cemetery </h3>
        <img className='cemetery' src="imgs/CIMITIR.jpg" alt="cemetery" />
        <div className='cemetery-description'>
           <p> The Merry Cemetery is a cemetery in the village <br /> of Săpânța, Maramureș County, Romania </p>
           <p> It is famous for its brightly coloured tombstones  <br /> with naïve paintings describing, in an original and poetic <br /> manner, the people who are buried there in <br /> addition to scenes from their lives. </p>
        </div>
    </Container>
   ) 
}

export default Cemetery;