import { Offcanvas, Nav, Accordion } from "react-bootstrap";
import { FiUser, FiLogOut } from 'react-icons/fi';

import '../styles/SidebarMenu.css';

const SidebarMenu = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <Offcanvas show={isSidebarOpen} onHide={toggleSidebar} backdrop="static" scroll>
            <Offcanvas.Header closeButton style={{ backgroundColor: '#E9AE18'}}>
                <Offcanvas.Title className="d-flex align-items-center">
                    <FiUser size={30} className="me-2"/>
                    <span style={{ fontWeight: "bold" }}> Hola, Daniel!</span>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* Sección 1 */}
                <h5>Usuario</h5>
                <Nav className="flex-column mb-3">
                    <Nav.Link href="/profile">Perfil de Usuario</Nav.Link>
                </Nav>
                <hr />
                {/* Sección 1 */}
                <h5>Principales Servicios</h5>
                <Nav className="flex-column mb-3">
                    <Nav.Link href="#food">Comida</Nav.Link>
                    <Nav.Link href="#delivery">Domicilio</Nav.Link>
                    <Nav.Link href="#reservations">Reservaciones</Nav.Link>
                </Nav>
                <hr />

                {/* Sección 2 */}
                <h5>Tipos de comida</h5>
                <Accordion flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comida Rápida</Accordion.Header>
                        <Accordion.Body>
                            <Nav className="flex-column">
                                <Nav.Link href="#hamburgers">Hamburguesas</Nav.Link>
                                <Nav.Link href="#Pizzas">Pizzas</Nav.Link>
                                <Nav.Link href="#hotdogs">Hot Dogs</Nav.Link>
                                <Nav.Link href="#wraps">Wraps</Nav.Link>
                                <Nav.Link href="#sausagepotatoes">Salchipas</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bebidas</Accordion.Header>
                        <Accordion.Body>
                            <Nav className="flex-column">
                                <Nav.Link href="#milkshake">Malteadas</Nav.Link>
                                <Nav.Link href="#softdrink">Gaseosas</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr />

                {/* Sección 3 */}
                <h5>Ayuda & Configuraciones</h5>
                <Nav className="flex-column">
                    <Nav.Link href="#customerservices">Servico al cliente</Nav.Link>
                    <Nav.Link href="/login" className="d-flex align-items-center justify-content-between  custom-text">
                        Cerrar Sesión
                        <FiLogOut className="ms-2 custom-icon"/>
                    </Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SidebarMenu;
