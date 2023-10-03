import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './Header';
import Bran from './Bran';
import Peles from './Peles';
import Corvinilor from './Corvinilor';
import Transfagarasan from './Transfagarasan';
import PalaceOfParlament from './CassaPoporului';
import Cemetery from './Cemetery';


const App = () => {
  return (
    <Container fluid>
       <Header />
       <Bran />
       <Peles />
       <Corvinilor />
       <Transfagarasan />
       <PalaceOfParlament />
       <Cemetery />
    </Container>
  );
}

export default App;
