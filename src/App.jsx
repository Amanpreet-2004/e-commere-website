import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import About from './components/About';
import Product from './components/Products';
import Footer from './components/Footer';
import Signup  from './components/Signup';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import OrderDone from './components/OrderDone';

function App() {
 
  return (
     <Router> 
     <Navbar/>
        <Routes>
          <Route exact path="/" element={
        <>
        <Home/>
        <Category/>
        <About />
        <Product/>
        <Footer/>
    </>
  } />
   <Route path="/signup" element={<Signup />} />
  
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element ={<Product/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/orderDone" element={<OrderDone/>}/>
    </Routes>
  </Router>
  )
}

export default App;


