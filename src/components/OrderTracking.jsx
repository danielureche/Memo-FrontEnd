import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);

    const handleTrack = () => {
        // Simulación de estado del pedido
        const mockStatus = {
            id: orderId,
            status: 'En tránsito',
            estimatedDelivery: '2024-11-25',
        };
        setOrderStatus(mockStatus);
    };

    return (
        <Container className="mt-4">
            <h2>Seguimiento de Pedido</h2>
            <Form className="mb-3">
                <Form.Group>
                    <Form.Label>ID del Pedido</Form.Label>
                    <Form.Control
                        type="text"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="Ingresa tu ID de pedido"
                    />
                </Form.Group>
                <Button className="mt-2" onClick={handleTrack}>
                    Seguir Pedido
                </Button>
            </Form>
            {orderStatus && (
                <Alert variant="info">
                    <p><strong>ID Pedido:</strong> {orderStatus.id}</p>
                    <p><strong>Estado:</strong> {orderStatus.status}</p>
                    <p><strong>Entrega Estimada:</strong> {orderStatus.estimatedDelivery}</p>
                </Alert>
            )}
        </Container>
    );
};

export default OrderTracking;
