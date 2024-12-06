import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import "../styles/ProductTracking.css";

const ProductTracking = () => {
    return (
        <Container className="tracking-container py-5">
            {/* Cabecera */}
            <Row className="align-items-center mb-4">
                <Col>
                    <h1 className="tracking-title text-center">Seguimiento del Producto</h1>
                </Col>
                <Col xs="auto">
                    <Button variant="outline-primary" className="btn-refresh">
                        <FiRefreshCw size={20}/>
                    </Button>
                </Col>
            </Row>

            {/* Línea de progreso */}
            <Row className="justify-content-center mb-4">
                <Col lg={8}>
                    <ProgressBar now={60} className="tracking-progress mb-3"/>
                    <div className="progress-steps d-flex justify-content-between">
                        <span className="step completed">Pedido Realizado</span>
                        <span className="step completed">En Camino</span>
                        <span className="step">En Entrega</span>
                        <span className="step">Entregado</span>
                    </div>
                </Col>
            </Row>

            {/* Detalle de Compra */}
            <Row className="justify-content-center">
                <Col lg={8}>
                    <div className="purchase-details p-4">
                        <h4 className="details-title mb-4">Detalle de Compra</h4>
                        <ul className="purchase-list">
                            <li className="purchase-item">
                                <span>Producto 1</span>
                                <span>$10.00</span>
                            </li>
                            <li className="purchase-item">
                                <span>Producto 2</span>
                                <span>$15.00</span>
                            </li>
                            <li className="purchase-item">
                                <span>Producto 3</span>
                                <span>$25.00</span>
                            </li>
                            <li className="purchase-item total">
                                <span>Total</span>
                                <span>$50.00</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductTracking;

