import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import RelevantProductsCarousel from "../components/RelevantProductsCarousel";
import Products from "./Products";
import { PiHamburger, PiPizza, } from "react-icons/pi";
import { CiHotdog } from "react-icons/ci";
import { GiTacos } from "react-icons/gi";
import { TbSausage } from "react-icons/tb";

const Home = () => {

    const products = [
        { id: 1, image: "https://media.istockphoto.com/id/1554119249/es/foto/picnic-de-hot-dog-en-la-banca-blanca.jpg?s=1024x1024&w=is&k=20&c=HLfyyABFDt13icHGGWtmTgGELPwcGDdhqr2LrQ9A7VQ=" },
        { id: 2, image: "https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=" },
        { id: 3, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, image: "https://media.istockphoto.com/id/2021971495/es/foto/3-beef-birria-tacos-stacked-on-black-plate.jpg?s=1024x1024&w=is&k=20&c=LVxPcmFfF7Vx7aYyJmXIMm5kKoxFz0JvWVbuIy0I-K8=" },
        { id: 5, image: "https://media.istockphoto.com/id/982796288/es/foto/salchipapa-peruana-caseras-fritas.jpg?s=1024x1024&w=is&k=20&c=MjH_5AyFQOhb1WrllSefdXtk_Z2V8ot_rxQ_RylOG_c=" },
        { id: 6, image: "https://plus.unsplash.com/premium_photo-1664476022249-d324561284e1?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    return (
        <>

            {/* Imagen de ancho completo */}
            {/* <Container className="mt-3">
                <Image
                    src="https://images.unsplash.com/photo-1619683909216-820c3bc64b67?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Banner"
                    className="w-100"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                />
            </Container> */}

            {/* Contenido principal */}
            <Container className="mt-4">
                {/* Carrusel de productos */}
                <RelevantProductsCarousel />
                <h6 className="my-3 text-center">Aquí puedes comprar y disfrutar de tu compra desde casa</h6>

                {/* Cards de tipos de comida */}
                <h2 className="my-3 text-center">Tipos de Comida</h2>
                <Row className="justify-content-center">
                <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <Card className="text-center shadow">
                            <Card.Body>
                                <PiHamburger size={100} className="mb-3" style={{ color: '#E9AE18'}} />
                                <Card.Title className="text-dark">Hamburguesa</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <Card className="text-center shadow">
                            <Card.Body>
                                <PiPizza size={100} className="mb-3" style={{ color: '#E9AE18'}}/>
                                <Card.Title className="text-dark">Pizzas</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <Card className="text-center shadow">
                            <Card.Body>
                                <CiHotdog size={100} className="mb-3" style={{ color: '#E9AE18'}}/>
                                <Card.Title className="text-dark">Hot Dogs</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <Card className="text-center shadow">
                            <Card.Body>
                                <GiTacos size={100} className="mb-3" style={{ color: '#E9AE18'}}/>
                                <Card.Title className="text-dark">Wraps</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <Card className="text-center shadow">
                            <Card.Body>
                                <TbSausage size={100} className="mb-3" style={{ color: '#E9AE18'}}/>
                                <Card.Title className="text-dark">Salchipapas</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    

                </Row>
                <hr />

                {/* Productos en forma circular */}
                <h2 className="my-5 text-center">Productos Destacados</h2>
                <Row className="justify-content-center">
                    {products.map((product) => (
                        <Col xs={6} sm={4} md={3} lg={2} className="mb-4" key={product.id}>
                            <div className="text-center">
                                {/* Imagen de producto en forma circular */}
                                <Image
                                    src={product.image}
                                    alt="Producto"
                                    className="rounded-circle"
                                    style={{
                                        width: "180px",
                                        height: "180px",
                                        objectFit: "cover",
                                        border: "3px solid #fff", // Para dar un borde blanco alrededor de la imagen
                                    }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
                <hr />


                {/* Productos */}
                <h2 className="my-2 text-cente" >
                    Descubre más productos
                </h2>
                <Products /> 
            </Container>
        </>
    );
};

export default Home;
