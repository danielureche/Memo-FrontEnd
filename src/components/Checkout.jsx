import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Checkout = () => {
    const [formData, setFormData] = useState({ name: "", address: "", payment: "" });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Pedido realizado con éxito.");
    };

    return (
        <Container className="mt-4">
            <h2>Proceso de Pago</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Método de Pago</Form.Label>
                    <Form.Control
                        as="select"
                        name="payment"
                        value={formData.payment}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccionar</option>
                        <option value="card">Tarjeta</option>
                        <option value="paypal">PayPal</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" className="mt-3">
                    Realizar Pedido
                </Button>
            </Form>
        </Container>
    );
};

export default Checkout;