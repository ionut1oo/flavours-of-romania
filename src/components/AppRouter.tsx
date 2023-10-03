import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
    return (
        <Container fluid>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </Container>
    )
}

export default AppRouter;
