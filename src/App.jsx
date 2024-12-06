import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import OrderTracking from './components/OrderTracking';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import ProductTracking from './components/ProductTracking';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza Margherita", price: 10.99, quantity: 2, imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Hamburguesa Clásica", price: 8.99, quantity: 1, imageUrl: "https://media.istockphoto.com/id/2061716709/es/foto/hamburguesa-de-costilla-a-la-plancha.jpg?s=1024x1024&w=is&k=20&c=9ZKyrS13gifkmlHl72euG-_Yh2-2BsGtMGNqqESia-0=" },
  ]);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Header onToggleCart={handleToggleCart} cartCount={cartCount} /> 
      <Cart showCart={showCart} onHideCart={handleToggleCart} cartItems={cartItems} setCartItems={setCartItems}/>
      <Dashboard />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products/" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/track-order" element={<OrderTracking/>} />
          <Route path="/track" element={<ProductTracking/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

