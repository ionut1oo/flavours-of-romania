import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/transfagarasan.css';

const Transfagarasan = () => {
    return (
        <Container className='transf-container'>
            <hr className='transfagarasan-horizont-top'/>
            <h3 className='transf-title'> Transfagarasan </h3>
            <img className='transf' src="imgs/transfagarasan.jpg" alt="transfagarasan" />
            <div className='transf-description'>
               <p> The Transfăgărășan is a paved mountain road <br /> crossing the  southern  section  of the Carpathian <br /> Mountains of Romania. </p>
               <p> The road climbs to an altitude of 2,042 metres <br /> (6,699 ft), making it the second highest <br /> mountain pass in Romania after the Transalpina </p>  
               <hr className='transf-horizontal-botttom'/>
            </div>
            <hr />
        </Container>
    )
}

export default Transfagarasan;