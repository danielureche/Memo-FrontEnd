import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
import '../styles/Cart.css';

const Cart = ({ showCart, onHideCart, cartItems, setCartItems }) => {
    // Incrementa la cantidad de un producto
    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrementa la cantidad de un producto o lo elimina si llega a 0
    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0) // Elimina productos con cantidad 0
        );
    };

    const handleCheckout = () => {
        alert("Proceder al pago");
    };

    return (
        <Offcanvas show={showCart} onHide={onHideCart} placement="end" className="cart-modern">
            <Offcanvas.Header closeButton style={{ backgroundColor: '#E9AE18'}}>
                <Offcanvas.Title className="cart-title">
                    <span style={{ fontWeight: "bold" }}> Order </span>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.length > 0 ? (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                {/* Aquí se reemplaza el placeholder por la imagen real */}
                                <img 
                                    src={item.imageUrl} // La URL de la imagen del producto
                                    alt={item.name} // Asegúrate de que cada producto tenga un nombre
                                    className="item-image"
                                />
                                <div className="item-details">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-actions">
                                    <Button className="btn-quantity" onClick={() => handleDecreaseQuantity(item.id)}>
                                        <FiMinus className='btn-minus'/>
                                    </Button>
                                    <span className="item-quantity">{item.quantity}</span>
                                    <Button className="btn-quantity" onClick={() => handleIncreaseQuantity(item.id)}>
                                        <FiPlus className='btn-plus'/>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-cart-text">Tu carrito está vacío</p>
                )}
                <Button className="checkout-button mt-3 w-100" onClick={handleCheckout}>Realizar compra</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;

