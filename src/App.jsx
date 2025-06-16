import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer.jsx";
import GridView from "./pages/gridview.jsx";
import ProductDeatils from "./pages/prodDetails.jsx";

export default function App() {


  return (
    <div className="">
      <Navbar />
      <ProductDeatils/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-list" element={<GridView />} />
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      
      <Footer />
     


    </div>
  );
}
