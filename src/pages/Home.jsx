import React from 'react';
import Hero from "../components/herosection.jsx";
import DealsOffer from "../components/dealoffer.jsx";
import Homeoutdoor from "../components/homeoutdoor.jsx";
import Gadgets from "../components/gadgets.jsx";
import SupplierQuote from "../components/supplierquote.jsx";
import Recommenditems from "../components/recommended.jsx";
import ExtraServices from "../components/extraserv.jsx";
import Navbar from '../components/navbar.jsx';
import MobileNavbar from '../components/mobile-navbar.jsx';
import { useEffect } from "react";



function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div>
            <Navbar cart={false} />
            <MobileNavbar showBackArrow={false} categoryName="" />
            <Hero />
            <DealsOffer />
            <Homeoutdoor />
            <Gadgets />
            <SupplierQuote />
            <Recommenditems />
            <ExtraServices />
        </div>
    )
}

export default Home;
