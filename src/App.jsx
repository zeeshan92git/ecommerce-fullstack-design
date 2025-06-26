import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer.jsx";
import GridView from "./pages/gridview.jsx";
import ProductDeatils from "./pages/prodDetails.jsx";
import Cart from "./pages/cart.jsx";
import Myprofile from "./pages/myprofile.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import Messages from "./pages/messages.jsx";
import Orders from "./pages/orders.jsx";
export default function App() {


  return (
    <div className="">
       <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login"  element={<Login/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/product-list" element={<GridView/>} />
        <Route path="/product-detail" element={<ProductDeatils/>} />
        <Route path="/my-cart" element={<Cart/>}/>
        <Route path="/my-profile" element={<Myprofile/>}/>
        <Route path="/my-orders" element={<Orders/>}/>
        <Route path="/my-messages" element={<Messages/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
