import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaXTwitter } from "react-icons/fa6";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer text-white py-4 mt-4">
            <Container>
                <Row>
                    {/* Sección de navegación */}
                    <Col md={3} sm={6} className="mb-3">
                        <h5>Explora</h5>
                        <ul className="list-unstyled">
                            <li><a href="/menu" className="text-white">Menú</a></li>
                            <li><a href="/offers" className="text-white">Ofertas</a></li>
                            <li><a href="/contact" className="text-white">Contáctanos</a></li>
                            <li><a href="/faq" className="text-white">Preguntas Frecuentes</a></li>
                        </ul>
                    </Col>

                    {/* Sección de contacto */}
                    <Col md={3} sm={6} className="mb-3">
                        <h5>Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li><FaPhone /> +57 312 638 6556</li>
                            <li><FaEnvelope /> memo.food@memo.com</li>
                            <li><FaMapMarkerAlt /> Calle 6A 5A, Bogotá, Colombia</li>
                        </ul>
                    </Col>

                    {/* Sección de redes sociales */}
                    <Col md={3} sm={6} className="mb-3">
                        <h5>Síguenos</h5>
                        <div className="d-flex">
                            <a href="https://facebook.com" className="text-white me-3"><FaFacebook size={24} /></a>
                            <a href="https://instagram.com" className="text-white me-3"><FaInstagram size={24} /></a>
                            <a href="https://twitter.com" className="text-white"><FaXTwitter size={24} /></a>
                        </div>
                    </Col>

                    {/* Nota de copyright */}
                    <Col md={3} sm={6} className="mb-3">
                        <h5>Sobre Nosotros</h5>
                        <p className="small">
                            Somos el ecommerce líder en comida rápida. Ordena tus platillos favoritos y disfruta del mejor servicio a domicilio. ¡Siempre rápidos y deliciosos!
                        </p>
                    </Col>
                </Row>
                <hr className="text-white" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Memo' Food. Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

