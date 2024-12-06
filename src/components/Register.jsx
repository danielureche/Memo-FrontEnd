import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registrando usuario con:", formData);
        // Aquí puedes integrar la lógica para registrar un nuevo usuario, como llamar al backend.
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '350px', padding: '20px' }}>
                <h3 className="mb-4">Registro</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            style={{ textAlign: 'left'}}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-100'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{ textAlign: 'left'}}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-100'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            style={{ textAlign: 'left'}}
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className='w-100'
                        />
                    </Form.Group>
                    <Button type="submit" className="w-100" variant="primary">
                        Registrarse
                    </Button>
                </Form>

                <div className="mt-3">
                    <p>¿Ya tienes una cuenta? <Link to="/login" style={{  textDecoration: 'none', color: '#E9AE18' }}>Inicia sesión aquí</Link></p>
                </div>
            </Card>
        </Container>
    );
};

export default Register;
