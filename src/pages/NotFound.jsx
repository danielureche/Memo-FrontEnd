import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="text-center mt-4">
            <h1>404</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
        </Container>
    );
};

export default NotFound;
