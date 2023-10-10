import React from 'react';
import '../styles/header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <hr /> <hr />
            <div className='header-title'>
               <h1> Flavours of </h1>
               <img className='flag' src='imgs/romania.jpg' alt='Romania' />
            </div>
            <pre> Best atractions from Romania </pre>
            <hr /> <hr />
      </Container>
    )
}

export default Header;