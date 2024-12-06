import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import FilterProducts from '../components/FiltersProducts';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            id: 1,
            name: 'Pizza',
            products: [
                { id: 1, name: 'Pizza Margherita', price: 10.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { id: 2, name: 'Pizza Pepperoni', price: 12.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { id: 3, name: 'Pizza Pepperoni', price: 12.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { id: 4, name: 'Pizza Pepperoni', price: 12.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            ],
        },
        {
            id: 2,
            name: 'Hamburguesas',
            products: [
                { id: 1, name: 'Hamburguesa Clásica', price: 8.99, image: 'https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=' },
                { id: 2, name: 'Hamburguesa BBQ', price: 10.99, image: 'https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=' },
                { id: 3, name: 'Hamburguesa BBQ', price: 10.99, image: 'https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=' },
                { id: 4, name: 'Hamburguesa BBQ', price: 10.99, image: 'https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=' },
            ],
        },
        {
            id: 3,
            name: 'Hot Dog',
            products: [
                { id: 1, name: 'Hot Dog Alfredo', price: 12.99, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
                { id: 2, name: 'Hot Dog  Carbonara', price: 14.99, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
                { id: 3, name: 'Hot Dog  Carbonara', price: 14.99, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
                { id: 4, name: 'Hot Dog  Carbonara', price: 14.99, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
            ],
        },
    ];

    const filteredCategories = selectedCategory
        ? categories.filter((category) => category.name === selectedCategory)
        : categories;

    return (
        <Container className="mt-4">
            <Row>
                {/* Filtro desplegable */}
                <Col xs={12} className="mb-4">
                    <FilterProducts
                        categories={categories.map((category) => category.name)}
                        onCategorySelect={setSelectedCategory}
                    />
                </Col>
            </Row>

            <Row>
                {filteredCategories.map((category) => (
                    <div key={category.id}>
                        {/* Título de la categoría */}
                        <h2 className="mb-4">{category.name}</h2>
                        <Row className="g-4">
                            {category.products.map((product) => (
                                <Col md={4} lg={3} key={product.id}>
                                    <ProductCard product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Row>
        </Container>
    );
};

export default Products;