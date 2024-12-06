import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "../styles/UserProfile.css";

const UserProfile = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    {/* Tarjeta Principal */}
                    <Card className="border-0 p-4 profile-card">
                        <Row className="align-items-center">
                            {/* Foto de Perfil */}
                            <Col md={4} className="text-center">
                                <Image
                                    src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    roundedCircle
                                    className="profile-img"
                                    alt="Foto de perfil"
                                />
                                <Button size="sm" className="mt-3 change-photo-btn">
                                    Cambiar Foto
                                </Button>
                            </Col>

                            {/* Información Básica */}
                            <Col md={8}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="fw-bold mb-0">Daniel Ureche</h4>
                                    <Button className="update-info-btn" size="sm">
                                        <FiEdit className="me-1" />
                                        Editar Perfil
                                    </Button>
                                </div>
                                <p className="text-muted mb-1"> <span className="main-info">Email:</span> dure.ure@email.com</p>
                                <p className="text-muted mb-1"> <span className="main-info">Teléfono:</span> +57 314 238 5632</p>
                                <p className="text-muted"> <span className="main-info">Dirección:</span> Calle 2C 3B, Bogotá, Colombia</p>
                            </Col>
                        </Row>

                        {/* Estadísticas */}
                        <Row className="text-center mt-4">
                            <Col>
                                <h5 className="fw-bold">15</h5>
                                <p className="text-muted">Órdenes Realizadas</p>
                            </Col>
                            <Col>
                                <h5 className="fw-bold">1</h5>
                                <p className="text-muted">Productos en Seguimiento</p>
                            </Col>
                            <Col>
                                <h5 className="fw-bold">8</h5>
                                <p className="text-muted">Comentarios</p>
                            </Col>
                        </Row>

                        {/* Opciones */}
                        <ListGroup variant="flush" className="mt-4">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>Órdenes Realizadas</span>
                                <Button variant="link" className="text-decoration-none p-0 link-btn">
                                    Ver Todas
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>Seguimiento de Productos</span>
                                <Button variant="link" href="/track" className="text-decoration-none p-0 link-btn">
                                    Ver Seguimiento
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>Comentarios a Productos</span>
                                <Button variant="link" className="text-decoration-none p-0 link-btn">
                                    Ver Comentarios
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;