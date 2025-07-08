import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

function SupplierQuote() {
    const [item, setItem] = useState('');
    const [details, setDetails] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('Pcs');
    const [showMobileForm, setShowMobileForm] = useState(false);

    const { backEndURL, token } = useContext(AppContext);

    const handleInquirySubmit = async () => {
        if (!item || !details || !quantity || !unit) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const { data } = await axios.post(backEndURL + '/api/inquiry/send', {
                item,
                details,
                quantity,
                unit
            }, { headers: { token } });

            if (data.success) {
                toast.success(data.message);
                setItem('');
                setDetails('');
                setQuantity('');
                setUnit('Pcs');
                setShowMobileForm(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to send inquiry");
        }
    };

    const InquiryForm = (

        <div className="rounded p-2 flex flex-col gap-4">
            <p className="text-xl font-bold text-gray-800">Send quote to Suppliers</p>

            <select
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md"
            >
                <option value="" disabled>Select item</option>
                <option>Automobiles</option>
                <option>Clothes and Wear</option>
                <option>Computer and Tech</option>
                <option>Tools, Equipment</option>
                <option>Sports and outdoor</option>
                <option>Animal and pets</option>
                <option>Machinery Tools</option>
            </select>

            <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Type more details..."
                maxLength={100}
                className="border border-gray-300 rounded-md px-4 py-2 h-20 resize-none outline-none"
            />

            <div className="flex gap-4">
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    className="border border-gray-300 rounded-md px-4 py-2 w-1/2 outline-none"
                />
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 w-1/2 outline-none"
                >
                    <option>Pcs</option>
                    <option>Box</option>
                    <option>Kg</option>
                </select>
            </div>

            <button
                onClick={handleInquirySubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 w-fit"
            >
                Send inquiry
            </button>
        </div>
    );

    return (
        <div className="w-full sm:h-[400px] h-[200px] bg-[url('https://res.cloudinary.com/dophfzeep/image/upload/v1750439683/s-quote_wudret.jpg')] bg-contain bg-center relative mt-6 max-w-7xl sm:mx-auto  rounded overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/100 to-sky-300/80 z-0" />

            {/* Main content */}
            <div className="relative z-10 flex items-start justify-between h-full sm:p-6 p-4">

                {/* Text Section */}
                <div className="w-full sm:w-1/2 text-white">
                    <p className="sm:text-2xl md:text-3xl lg:text-4xl text-xl font-semibold mb-4 leading-snug">
                        An easy way to send <br /> requests to all suppliers
                    </p>
                    <p className="hidden sm:block text-lg">
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipisicing elit. Reiciendis sit velit totam.
                    </p>
                    {/* Mobile Button */}
                    <button
                        onClick={() => setShowMobileForm(true)}
                        className="sm:hidden block px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-white hover:text-blue-600 font-medium transition duration-100 w-fit mt-4"
                    >
                        Send inquiry
                    </button>
                </div>
                {/* Desktop Form */}
                <div className="w-1/2 bg-white rounded shadow-md p-2 ml-8  hidden sm:flex flex-col gap-2 max-w-md">
                    {InquiryForm}
                </div>
            </div>



            {/* Mobile Form Modal */}
            {showMobileForm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 sm:hidden">
                    <div className="bg-gray-100 rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={() => setShowMobileForm(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
                        >
                            &times;
                        </button>
                        {InquiryForm}
                    </div>
                </div>
            )}

        </div>
    );
}

export default SupplierQuote;
