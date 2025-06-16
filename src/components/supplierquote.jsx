import React from 'react'

function SupplierQuote() {
    return (
        <div className="w-full h-[400px] bg-[url('/images/s-quote.jpeg')] bg-cover bg-center relative mt-6 max-w-7xl mx-auto rounded overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/100 to-sky-300/80 z-0" />

            {/* Main content */}
            <div className="relative z-10 flex items-start justify-between h-full p-6">

                <div className="w-1/2 text-white ">
                    <p className="text-4xl font-semibold mb-4 leading-snug">
                        An easy way to send <br /> requests to all suppliers
                    </p>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipisicing elit. Reiciendis sit velit totam.
                    </p>
                </div>


                <div className="w-1/2 bg-white rounded shadow-md p-8 ml-8 flex flex-col gap-4 max-w-md">
                    <p className="text-xl font-bold text-gray-800">Send quote to Suppliers</p>

                    {/* Item Selector */}
                    <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option value="" disabled selected>What item you need?</option>
                        <option>Automobiles</option>
                        <option>Clothes and Wear</option>
                        <option>Computer and Tech</option>
                        <option>Tools, Equipment</option>
                        <option>Sports and outdoor</option>
                        <option>Animal and pets</option>
                        <option>Machinery Tools</option>
                    </select>


                    <textarea
                        placeholder="Type more details..."
                        maxLength={100}
                        className="border border-gray-300 rounded-md px-4 py-2 h-20 resize-none"
                    />


                    {/* Quantity & Unit */}
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Quantity"
                            className="border border-gray-300 rounded-md px-4 py-2 w-1/2"
                        />
                        <select className="border border-gray-300 rounded-md px-4 py-2 w-1/2">
                            <option>Pcs</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 w-fit">
                        Send inquiry
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupplierQuote;
