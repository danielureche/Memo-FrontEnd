import React from 'react';
import { Container, Button } from 'react-bootstrap';

const AdminPanel = () => {
    return (
        <Container className="mt-4">
            <h2>Panel de Administración</h2>
            <Button href="/admin/orders" variant="primary" className="me-3">
                Ver Pedidos
            </Button>
            <Button href="/admin/products" variant="secondary">
                Gestionar Productos
            </Button>
        </Container>
    );
};

export default AdminPanel;