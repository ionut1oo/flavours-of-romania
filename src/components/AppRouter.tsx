import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './Header';
import Bran from './Bran';
import Peles from './Peles';
import Corvinilor from './Corvinilor';
import Transfagarasan from './Transfagarasan';
import PalaceOfParlament from './CassaPoporului';
import Cemetery from './Cemetery';
import Footer from './Footer';


const App = () => {
  return (
    <Container>
        <Header />
        <Bran />
        <Peles />
        <Corvinilor />
        <Transfagarasan />
        <PalaceOfParlament />
        <Cemetery />
        <Footer />
    </Container>
  );
}

export default App;
