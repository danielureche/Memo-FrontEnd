import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card, Badge, Form, InputGroup, } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import '../styles/ProductDetails.css';
import ProductCarousel from '../components/RelatedProductCarrusel';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const product = {
        id: id,
        name: "Pizza Margherita",
        description: "Deliciosa pizza con ingredientes frescos, tomate, mozzarella y albahaca.",
        price: 41.99,
        images: [
            "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        rating: 4.7,
        numReviews: 87,
    };

    const addToCart = () => {
        alert(`Producto añadido al carrito: ${quantity} x ${product.name}`);
    };

    return (
        <Container className="my-5">
            <Row>
                {/* Imágenes pequeñas en vertical */}
                <Col md={2} className="d-flex flex-column align-items-center">
                    {product.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            fluid
                            className="mb-2 thumbnail-image"
                            style={{
                                cursor: 'pointer',
                                border: mainImage === image ? '2px solid #E9AE18' : 'none',
                                borderRadius: '5px',
                                width: '196px',
                                maxHeight: '100px'
                            }}
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </Col>

                {/* Imagen principal */}
                <Col md={7} className="d-flex align-items-center">
                    <Image src={mainImage} fluid className="rounded" style={{
                                width: '746px',
                                maxHeight: '373px'
                            }}/>
                </Col>

                {/* Detalles del producto */}
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            {/* Sección de estrellas y reseñas */}
                            <Row className="align-items-center mb-3">
                                <Col>
                                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                                        <FaStar key={i} color="#ffc107" />
                                    ))}
                                    {product.rating % 1 !== 0 && (
                                        <FaStar color="#ffc107" />
                                    )}
                                </Col>
                                <Col xs="auto">
                                    <Badge bg="secondary">{product.rating.toFixed(1)}</Badge>
                                    <span className="ms-1">({product.numReviews} reviews)</span>
                                </Col>
                            </Row>

                            {/* Nombre y descripción */}
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>

                            {/* Precio y cantidad */}
                            <Row className="d-flex justify-content-between align-items-center">
                                <Col>
                                    <h4>${product.price}</h4>
                                </Col>
                                <Col xs="7">
                                    <InputGroup>
                                        <Button
                                            variant="outline-primary"
                                            className="button-minus"
                                            onClick={() => setQuantity(quantity - 1)}
                                            disabled={quantity <= 1}
                                        >
                                            <FiMinus />
                                        </Button>
                                        <Form.Control
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                            min="1"
                                            className="form-control quantity-input"
                                        />
                                        <Button
                                            variant="outline-primary"
                                            className="button-plus"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            <FiPlus />
                                        </Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Button className="mt-3 add-cart" onClick={addToCart}>
                                Añadir al carrito
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <ProductCarousel/>                    
            </Row>
            
        </Container>
    );
};

export default ProductDetails;


