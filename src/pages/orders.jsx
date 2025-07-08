// Orders.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function Orders() {
    const { token, backEndURL } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    console.log(orders);

    const getOrders = async () => {
        try {
            const { data } = await axios.get(backEndURL + '/api/order/get-order', {
                headers: { token },
            });
            if (data.success) {
                setOrders(data.orders);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to fetch orders.");
        }
    };

    useEffect(() => {
        if (token) getOrders();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="flex items-center gap-2 text-2xl font-bold mb-4">
                <Link to="/"><FaArrowLeftLong/></Link>
                My Orders
            </p>
            {orders.length === 0 ? (
                    <p className="text-stone-500">You have no orders yet.</p>
            ) : (
                orders.map((order, i) => (
                    <div key={i} className="border border-gray-300 rounded-md p-4 mb-4 bg-white shadow-sm">
                        <p className="sm:text-lg text-sm text-stone-400 mb-2">Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        {order.products.map((prod, idx) => (
                            <div key={idx} className={`flex items-center justify-between ${i === order.products.length - 1 ? 'border-b-0' : 'border-b'} pb-2 mb-2`}>
                                <div className="flex items-center gap-4 rounded">
                                    <div className='sm:w-32 sm:h-32 w-24 h-24 rounded'>
                                        <img src={prod.productId.image} alt={prod.productId.name} className="w-full h-full object-cover rounded" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{prod.productId.name}</p>
                                        <p className="text-gray-500 text-sm">Qty: {prod.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-gray-700">${prod.productId.price}</p>
                            </div>
                        ))}
                        <div className="text-right font-bold text-gray-700">Total: ${order.total.toFixed(2)}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;
