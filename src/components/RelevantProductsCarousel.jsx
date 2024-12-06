import React from 'react';
import { Carousel } from 'react-bootstrap';

const RelevantProductsCarousel = () => {
    const relevantProducts = [
        { id: 1, image: 'https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=' },
        { id: 2, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
        { id: 3, image: 'https://media.istockphoto.com/id/2021971495/es/foto/3-beef-birria-tacos-stacked-on-black-plate.jpg?s=1024x1024&w=is&k=20&c=LVxPcmFfF7Vx7aYyJmXIMm5kKoxFz0JvWVbuIy0I-K8=' },
        { id: 4, image: 'https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=' },
        { id: 5, image: 'https://media.istockphoto.com/id/982796288/es/foto/salchipapa-peruana-caseras-fritas.jpg?s=1024x1024&w=is&k=20&c=MjH_5AyFQOhb1WrllSefdXtk_Z2V8ot_rxQ_RylOG_c=' },
        { id: 6, image: 'https://images.unsplash.com/photo-1619683909216-820c3bc64b67?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
        <Carousel onClick={(e) => e.stopPropagation()}>
            {relevantProducts.map((product) => (
                <Carousel.Item key={product.id}>
                    <img
                        src={product.image}
                        alt={`Producto ${product.id}`}
                        className="d-block w-100"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default RelevantProductsCarousel;

