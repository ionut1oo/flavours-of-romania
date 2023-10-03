import React from 'react';
import '../styles/header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
          <hr /> <hr />
          <h1> Flavours of <img className='flag' src='/imgs/romania.jpg' alt='Romania' /> </h1>
          <pre> The best atractions from Romania </pre>
          <hr className='horizontal-bottom'/> <hr className='horizontal-bottom' />
      </Container>
    )
}

export default Header;