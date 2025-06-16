import React from 'react';
import Hero from "../components/herosection.jsx";
import DealsOffer from "../components/dealoffer.jsx";
import Homeoutdoor from "../components/homeoutdoor.jsx";
import Gadgets from "../components/gadgets.jsx";
import SupplierQuote from "../components/supplierquote.jsx";
import Recommenditems from "../components/recommended.jsx";
import ExtraServices from "../components/extraserv.jsx";
function Home() {
    return (
        <div>
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
