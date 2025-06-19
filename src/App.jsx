import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer.jsx";
import GridView from "./pages/gridview.jsx";
import ProductDeatils from "./pages/prodDetails.jsx";
import Cart from "./pages/cart.jsx";
export default function App() {


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-list" element={<GridView />} />
        <Route path="/product-detail" element={<ProductDeatils/>}/>
        <Route path="/my-cart" element={<Cart/>}/>
        <Route/>
      </Routes>
      
      <Footer />
     


    </div>
  );
}
