import React from 'react';
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';

const RelevantProductsAccordion = () => {
    const relevantProducts = [
        {
            id: 1,
            category: 'Pizzas',
            products: [
                { id: 1, name: 'Pizza Margherita', price: 10.99, image: 'https://via.placeholder.com/100' },
                { id: 2, name: 'Pizza Pepperoni', price: 12.99, image: 'https://via.placeholder.com/100' },
            ],
        },
        {
            id: 2,
            category: 'Hamburguesas',
            products: [
                { id: 3, name: 'Hamburguesa Clásica', price: 8.99, image: 'https://via.placeholder.com/100' },
                { id: 4, name: 'Hamburguesa BBQ', price: 10.99, image: 'https://via.placeholder.com/100' },
            ],
        },
        {
            id: 3,
            category: 'Pastas',
            products: [
                { id: 5, name: 'Pasta Alfredo', price: 12.99, image: 'https://via.placeholder.com/100' },
                { id: 6, name: 'Pasta Carbonara', price: 14.99, image: 'https://via.placeholder.com/100' },
            ],
        },
    ];

    return (
        <Accordion>
            {relevantProducts.map((category, index) => (
                <Accordion.Item eventKey={index.toString()} key={category.id}>
                    <Accordion.Header>{category.category}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {category.products.map((product) => (
                                <Col md={6} lg={4} key={product.id} className="mb-3">
                                    <Card>
                                        <Card.Img variant="top" src={product.image} alt={product.name} />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>${product.price.toFixed(2)}</Card.Text>
                                            <Button variant="primary">Agregar al Carrito</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default RelevantProductsAccordion;
