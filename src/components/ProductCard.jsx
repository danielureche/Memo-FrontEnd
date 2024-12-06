import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    if (!product) {
        return <div>Producto no encontrado</div>; // Manejo de caso donde no hay datos
    }

    const { image, name, price, id } = product;

    return (
        <Card style={{ width: '16rem'}} className='product-card'>
            <Card.Img 
                variant="top" 
                src={image || 'https://via.placeholder.com/300' } 
                alt={name} 
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button href={`/products/${id}`} className='btn-view'>
                    Ver Detalles
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;