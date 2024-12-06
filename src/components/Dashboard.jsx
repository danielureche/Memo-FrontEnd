import React, { useState } from "react";
import "../styles/Dashboard.css"; // Puedes usar tus propios estilos
import SidebarMenu from "../components/SidebarMenu"; // Importa el componente del menú lateral
import { FaBars } from "react-icons/fa";
import {  Navbar, Container, Button } from "react-bootstrap";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Header tipo Navbar */}
            <Navbar style={{ backgroundColor: '#E9AE18', padding: '3px', height: '50px' }} expand="lg">
                <Container fluid>
                    {/* Ícono de menú */}
                    <Button variant="link" onClick={toggleSidebar} className="text-white me-3">
                        <FaBars size={20} />
                    </Button>
                </Container>
            </Navbar>

            {/* Menú lateral */}
            <SidebarMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/*            
            <Container style={{ marginTop: "20px", padding: "20px" }}>
                <h1>Bienvenido al Dashboard</h1>
                <p>Este es tu contenido principal.</p>
                <section id="perfil">
                    <h2>Mi Perfil</h2>
                    <p>Información del usuario...</p>
                </section>
                <section id="compras">
                    <h2>Mis Compras</h2>
                    <p>Historial de compras...</p>
                </section>
                <section id="configuracion">
                    <h2>Configuración</h2>
                    <p>Opciones de configuración...</p>
                </section>
            </Container> */}
        </>
    );
};

export default Dashboard;