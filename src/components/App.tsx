import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter'

const App= () => {
    return (
        <Container fluid>
            <Routes>
                <Route path='/' element={<AppRouter />} />
            </Routes>
        </Container>
    )
}

export default App;