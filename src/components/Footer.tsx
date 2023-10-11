import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
    return (
        <Container className='footer'>
            <p className='text-center text-light mt-5'> © 2023 Flavours Of Romania by Ionut Ciornei </p>
        </Container>
    )
}

export default Footer;