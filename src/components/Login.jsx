import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ 
        email: '', 
        password: '' 
    });

    const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña se muestra


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Alternar el estado de visibilidad de la contraseña
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión con:", formData);
        // Aquí puedes integrar la lógica para iniciar sesión, como llamar al backend.
    };

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <Card style={{ width: '350px', padding: '20px' }}>
                <h3 className="mb-4">Iniciar Sesión</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{ textAlign: 'left' }}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-100"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="password-container d-flex">
                            <Form.Control
                                style={{ textAlign: 'left' }}
                                type={showPassword ? "text" : "password"} // Mostrar u ocultar la contraseña
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="password-input"
                            />
                            <Button
                                variant="link"
                                onClick={togglePasswordVisibility}
                                className="password-toggle-btn"
                                
                            >
                                {showPassword 
                                    ? <FaEyeSlash style={{ color: '#E9AE18' }} /> 
                                    : <FaEye style={{ color: '#E9AE18' }}  />} {/* Mostrar el ícono de ojo según el estado */}
                            </Button>
                        </div>
                    </Form.Group>
                    <Button type="submit" className="w-100">
                        Iniciar Sesión
                    </Button>
                </Form>
                <div className="mt-3">
                    <p>¿No tienes cuenta? <Link to="/register" style={{  textDecoration: 'none', color: '#E9AE18' }}>Crear tu cuenta aquí</Link></p>
                </div>
            </Card>
        </Container>
    );
};

export default Login;
