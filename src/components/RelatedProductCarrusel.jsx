import React, { useState } from 'react';
import { Container, Row, Card, Image } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const relatedProducts = [
        {
            id: "related-1",
            name: "Pizza Pepperoni",
            image: "https://via.placeholder.com/300x200",
            price: 39.99,
        },
        {
            id: "related-2",
            name: "Pizza Vegetariana",
            image: "https://via.placeholder.com/300x200",
            price: 35.99,
        },
        {
            id: "related-3",
            name: "Pizza Hawaiana",
            image: "https://via.placeholder.com/300x200",
            price: 37.99,
        },
        {
            id: "related-4",
            name: "Pizza Quattro Formaggi",
            image: "https://via.placeholder.com/300x200",
            price: 42.99,
        },
        {
            id: "related-5",
            name: "Pizza BBQ Chicken",
            image: "",
            price: 44.99,
        },
        {
            id: "related-6",
            name: "Pizza Mexicana",
            image: "https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=",
            price: 41.99,
        },
        {
            id: "related-7",
            name: "Pizza Suprema",
            image: "https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=",
            price: 45.99,
        },
        {
            id: "related-8",
            name: "Pizza Marinera",
            image: "https://via.placeholder.com/300x200",
            price: 47.99,
        },
    ];

    const itemsPerPage = 5;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? relatedProducts.length - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= relatedProducts.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const visibleProducts = relatedProducts.slice(
        currentIndex,
        currentIndex + itemsPerPage
    );

    const overflowProducts = currentIndex + itemsPerPage > relatedProducts.length
        ? relatedProducts.slice(0, (currentIndex + itemsPerPage) % relatedProducts.length)
        : [];

    return (
        <Container className="my-5">
            <h3 className="mb-4">Productos relacionados</h3>
            <Row>
                
            <div className="position-relative  d-flex justify-content-center align-items-center">
                <div 
                    className="position-absolute top-50 start-0 translate-middle-y ms-4 cursor-pointer"
                    onClick={handlePrevClick}
                    style={{ zIndex: 10 }}
                >
                    <FaChevronLeft size={32}  />
                </div>
                <div 
                    className="position-absolute top-50 end-0 translate-middle-y me-4 cursor-pointer"
                    onClick={handleNextClick}
                    style={{ zIndex: 10 }}
                >
                    <FaChevronRight size={32}  />
                </div>

                {/* Carrusel de productos */}
                <Row className="d-flex gap-3">
                    {visibleProducts.concat(overflowProducts).map((product) => (
                        <Card key={product.id} className="flex-shrink-0 border-1" style={{ width: "200px" }}>
                            <Image src={product.image} style={{ width: "100%", height: "auto" }} />
                            <Card.Body>
                                <Card.Title className="text-truncate">{product.name}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </div>
            </Row>

        </Container>
    );
};

export default ProductCarousel;
