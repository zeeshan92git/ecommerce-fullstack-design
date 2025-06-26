import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Messages() {
  const { token, backEndURL } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(`${backEndURL}/api/order/get-order`, {
        headers: { token }
      });

      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Unable to fetch messages from orders.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Messages</h2>

      {orders.length === 0 ? (
        <p className="text-stone-500">No order-related messages yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="text-blue-600 font-semibold text-lg">
                    Order Update: #{order._id.slice(-6).toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Placed on: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-sm text-gray-400">{order.orderStatus}</span>
              </div>

              <p className="text-gray-700 mb-2">
                Your order is currently <strong>{order.orderStatus}</strong>. Payment status is{' '}
                <strong>{order.paymentStatus}</strong>.
              </p>

              <ul className="text-sm text-gray-600 list-disc ml-5">
                {order.products.map((p, i) => (
                  <li key={i}>
                    {p.productId?.name || 'Product'} x {p.quantity}
                  </li>
                ))}
              </ul>

              <p className="mt-2 text-right text-sm font-medium text-gray-800">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;
