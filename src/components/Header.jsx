import {React} from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { LuShoppingCart} from 'react-icons/lu'; 
import { FiUser } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import memo from '../assets/images/memo.png';
import '../styles/Header.css'

const Header = ({ onToggleCart, cartCount }) => {
    return (
        <Navbar expand="lg" className="shadow-sm">
            <Container fluid >
                {/* Logo */}
                <Navbar.Brand href="/" className="fw-bold">
                    <img src={memo} className='img' />
                </Navbar.Brand>

                {/* Barra de búsqueda */}
                <Navbar.Collapse>
                    <Form className="d-flex w-50">
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Buscar productos..."
                                className="input"
                            />
                            <Button className="button-input">
                                <FaSearch size={19}/>
                            </Button>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>

                {/* Iconos de usuario y carrito */}
                <Nav className="ms-auto">
                    <Nav.Link href="/login" className="d-flex align-items-center">
                        <FiUser size={28} className='icon-black' />
                    </Nav.Link>
                    <Nav.Link className="d-flex align-items-center" onClick={onToggleCart}>
                        <LuShoppingCart size={28} className='icon-black' />
                        {/* Puedes mostrar la cantidad de productos en el carrito aquí */}
                        <span className="badge text-dark ms-1">{cartCount}</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;