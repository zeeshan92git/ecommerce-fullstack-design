import { useContext, useState, useEffect } from 'react';
import { MdLock } from "react-icons/md";
import { PiVanFill } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SavedForLaterContext } from "../context/savedForLaterContext.jsx";


function Cart() {

    const { productsData, backEndURL, token } = useContext(AppContext);

    const { savedItems, toggleSaveItem, removeSavedItem, clearSavedItems } = useContext(SavedForLaterContext);
    //console.log("savedItems for later\n", savedItems);
    //console.log("BackendUrl and token at cart page\n", backEndURL, token);
    const [showOption, setshowOption] = useState(false);
    const [couponInput, setCouponInput] = useState('');
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    console.log("Cart items", cartItems);

    const getCartItems = async () => {
        try {
            const { data } = await axios.get(backEndURL + '/api/cart/get', { headers: { token } });
            console.log(data);
            if (data.success) {
                setCartItems(data?.products); // Assuming you store cart items in state
            } else {
                console.log("Login first");
                toast.error(data?.message);
            }
        } catch (error) {
            toast.error("Failed to fetch cart items");
        }
    };

    // Calculate subtotal and discount
    const subtotal = cartItems.reduce((acc, item) => {
        const price = item.productId.price || 0;
        const quantity = item.quantity || 1;
        return acc + price * quantity;
    }, 0);

    const handleApplyCoupon = () => {
        if (couponInput.trim() !== '') {
            const discountAmount = subtotal * 0.5; // 50% of subtotal
            setDiscount(discountAmount);
            toast.success('50% discount applied!');
        } else {
            setDiscount(0);
            toast.warn('Enter a coupon to get discount!');
        }
    };

    const addToCart = async (productId) => {
        if (!token) {
            toast.warn('Login to add items to cart');
            return navigate('/login');
        }
        try {
            const { data } = await axios.post(backEndURL + '/api/cart/add', { productId: productId, quantity: 1 }, { headers: { token } });
            console.log(data);
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            // console.log(error.message);
            toast.error("Failed to add to cart");
        }
    };

    const setQuantity = async (productId, quantity) => {
        try {
            const { data } = await axios.post(`${backEndURL}/api/cart/set-quantity`, { productId, quantity }, { headers: { token } });

            if (data.success) {
                toast.success(data.message);
                getCartItems(); // Refresh cart state
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to update quantity");
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const { data } = await axios.delete(`${backEndURL}/api/cart/remove/${productId}`, { headers: { token } });
            if (data.success) {
                toast.success(data.message);
                getCartItems(); // refresh list
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to remove item");
        }
    };

    const clearCart = async () => {
        try {
            const { data } = await axios.delete(`${backEndURL}/api/cart/clear`, {
                headers: { token }
            });

            if (data.success) {
                toast.success(data.message);
                setCartItems([]); // Clear local state too
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to clear cart");
        }
    };

    const placeOrder = async () => {
        try {
            const { data } = await axios.post(backEndURL + '/api/order/place', {}, {
                headers: { token }
            });
            if (data.success) {
                toast.success("Order placed successfully!");
                return data.order;
            } else {
                toast.error(data.message);
                return null;
            }
        } catch (err) {
            toast.error("Order failed. Try again.");
            return null;
        }
    };


    useEffect(() => {
        if (token) getCartItems();
    }, [token]);


    return (
        <>
            <Navbar cart={true} />
            <div className='sm:max-w-7xl w-full sm:mx-20 sm:px-0 px-2 '>

                <h1 className='sm:block hidden text-[24px] font-bold mb-5 mt-5 mx-4'>My cart ({cartItems.length})</h1>
                <Link to="/" className='sm:hidden flex items-center gap-3 text-[24px] font-bold mb-5 mt-5'>
                    <FaArrowLeftLong className='text-2xl'/>
                    <h1>Shopping Cart</h1>
                </Link>

                {/* products list desktop view */}
                <div className='sm:flex hidden items-start gap-2 mb-6 mx-4'>
                    {/* left side */}
                    <div className='w-3/4 border border-stone-300 p-3 rounded-md'>
                        <div className="space-y-4">
                            {cartItems.length === 0 ?
                                <p className='p-2 text-stone-500 text-lg'>Empty Cart ? <strong>Go BACK TO SHOP!!!</strong></p> :
                                cartItems.map((item, index) => {
                                    const prod = item.productId;
                                    const quantity = item.quantity;
                                    return (
                                        <div key={index}
                                            className={`flex gap-2 items-start ${index === cartItems.length - 1 ? 'border-b-0' : 'border-b'
                                                } border-stone-300 pb-4`}>
                                            {/* Image */}
                                            <div className="w-28 h-28 border border-stone-300">
                                                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                                            </div>
                                            {/* Details */}
                                            <div className="flex-1 px-4">
                                                <p className="text-lg font-medium text-gray-800">{prod.name}</p>
                                                <p className="text-[15px] text-gray-400">
                                                    <strong>Seller: </strong>
                                                    {prod.sellerName}
                                                </p>
                                                {/* attributes */}
                                                {Object.entries(prod.attributes).slice(0, 2).map(([key, value], index) => (
                                                    <div key={index} className='text-[15px] text-gray-400'>
                                                        <p><strong>{key}: </strong>{value}</p>
                                                    </div>
                                                ))}
                                                {/* Buttons */}
                                                <div className="mt-2 flex gap-2">
                                                    <button
                                                        className="px-3 py-1 text-sm font-medium border border-stone-300 text-red-500 rounded hover:bg-red-500 hover:text-white hover:border-red-500"
                                                        onClick={() => removeFromCart(prod._id)}>Remove
                                                    </button>
                                                    <button onClick={() => { toggleSaveItem(prod); removeFromCart(prod._id); }} className="px-3 py-1 text-sm font-medium border border-stone-300 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                                        Save for later
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Price + Quantity */}
                                            <div className="flex flex-col items-end gap-4">
                                                <p className="text-lg font-semibold text-gray-800">$ {prod.price}</p>
                                                <select
                                                    className="border rounded px-2 py-1 text-lg text-gray-700 cursor-pointer outline-none"
                                                    value={quantity}
                                                    onChange={(e) =>
                                                        setQuantity(prod._id, Number(e.target.value))
                                                    }
                                                >
                                                    {[...Array(10).keys()].map((n) => (
                                                        <option key={n + 1} value={n + 1}>
                                                            Qty: {n + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    );
                                })}

                            <div className='flex items-center justify-between'>
                                <Link to="/product-list" className='flex items-center gap-2 text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-700 hover:border-blue-700'>
                                    <FaArrowLeft /> Back to Shop
                                </Link>
                                {cartItems.length != 0 &&
                                    <button onClick={clearCart} className='text-blue-500 font-medium border border-stone-300 rounded px-3 py-2 hover:bg-blue-500 hover:border-blue-500 hover:text-white'>
                                        Remove All
                                    </button>
                                }

                            </div>
                        </div>

                    </div>
                    {/* right side */}
                    <div className='w-1/4'>

                        <div className='w-full flex flex-col gap-2 mb-4 border border-stone-300 rounded-md p-3'>
                            <p className='text-lg text-stone-600'>Have a coupon?</p>
                            <div className="flex items-center gap-2 mt-4">
                                <input type="text" placeholder="Enter coupon" value={couponInput}
                                    onChange={(e) => setCouponInput(e.target.value)}
                                    className="border border-stone-400 px-3 py-2 rounded outline-none text-stone-600" />
                                <button onClick={handleApplyCoupon}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply
                                </button>
                            </div>

                        </div>

                        <div className='w-full flex flex-col gap-2 border border-stone-300 rounded-md p-3'>
                            <div className='flex flex-col gap-2 border-b border-stone-300'>

                                <div className='flex items-center justify-between'>
                                    <p className='text-lg text-stone-600'>Subtotal:</p>
                                    <span className='text-lg text-stone-400'>$ {subtotal.toFixed(2)}</span>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='text-lg text-stone-600'>Discount:</p>
                                    <span className='text-lg text-green-500'>-$ {discount.toFixed(2)}</span>
                                </div>

                                <div className='flex items-center justify-between mb-2'>
                                    <p className='text-lg text-stone-600'>Tax:</p>
                                    <span className='text-lg text-red-500'>+$ 14.00</span>
                                </div>

                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                <p className='text-lg text-stone-800 font-bold'>Total</p>
                                <span className='text-xl text-stone-800 font-bold'>$ {(subtotal - discount + 14).toFixed(2)}</span>
                            </div>

                            <button
                                onClick={async () => {
                                    const order = await placeOrder();
                                    if (order) {
                                        navigate("/my-orders");
                                    }
                                }}
                                className='text-center font-bold text-lg bg-green-600 hover:bg-green-500 text-white py-4 px-5 w-full rounded-md'>
                                Checkout
                            </button>
                        </div>

                    </div>
                </div>

                {/* product list mobile view */}
                <div className='sm:hidden flex flex-col gap-2 border-t border-stone-400 p-2 mb-4 mx-2'>
                    {cartItems.length === 0 ? (
                        <p className='p-6 text-stone-500 text-[10px]'>
                            Empty Cart? <strong>Go BACK TO SHOP !!!</strong>
                        </p>
                    ) : (
                        cartItems.map((item, index) => {
                            const prod = item.productId;
                            const quantity = item.quantity;    //line 91 for mobView quantity...

                            return (
                                <div key={index} className='flex flex-col gap-4 border-b border-stone-400'>
                                    {/* Top Row */}
                                    <div className='flex items-start gap-1 justify-between w-full'>
                                        <div className='flex items-start gap-2'>
                                            <div className='border border-stone-300  w-28 h-28 rounded-md'>
                                                <img src={prod.image} alt={prod.name} className='w-full h-full rounded object-cover' />
                                            </div>
                                            <div className='flex flex-col gap-1 text-sm text-gray-400'>
                                                <p><strong>Seller: </strong>{prod.sellerName}</p>
                                                {/* attributes */}
                                                {Object.entries(prod.attributes).slice(0, 2).map(([key, value], index) => (
                                                    <div key={index} className='text-[15px] text-gray-400'>
                                                        <p><strong>{key}: </strong>{value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {showOption ? (
                                            <div className='flex flex-col items-start gap-2 '>
                                                <button onClick={() => { removeFromCart(prod._id); }} className="px-2 py-1 text-xs font-medium border border-stone-300 text-red-500 rounded hover:bg-red-500 hover:text-white hover:border-red-500">
                                                    Remove
                                                </button>
                                                <button onClick={() => { toggleSaveItem(prod); removeFromCart(prod._id); }} className="px-2 py-1 text-xs truncate  font-medium border border-stone-300 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                                    Save for later
                                                </button>
                                            </div>
                                        ) : (
                                            <SlOptionsVertical className='text-xl' onClick={() => setshowOption(true)} />
                                        )}
                                    </div>

                                    {/* Bottom Row */}
                                    <div className='flex items-center justify-between w-full mb-2'>
                                        <div className='flex items-center border border-stone-300 rounded-md overflow-hidden'>
                                            <span className='text-[20px] px-4 py-2 border-r border-stone-300'>
                                                <button className='text-[20px] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed' disabled={quantity === 1} onClick={() => setQuantity(prod._id, quantity - 1)}>
                                                    <AiOutlineMinus />
                                                </button>
                                            </span>
                                            <span className='text-[20px] px-4 py-2 border-r border-stone-300'>{quantity}</span>
                                            <span className='text-[20px] px-4 py-2'>
                                                <button className='text-[20px] text-gray-500' onClick={() => setQuantity(prod._id, quantity + 1)}>
                                                    <IoAddOutline />
                                                </button>
                                            </span>
                                        </div>
                                        <span className='text-lg font-medium'>$ {prod.price}</span>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* payment suport delivery */}
                <div className='flex items-start sm:gap-6 gap-2 sm:mb-6 mb-2 mx-4 sm:mx-0 sm:p-0 p-2'>
                    <div className='flex items-center gap-2'>
                        <MdLock className='sm:w-10 sm:h-10 w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                        <div className='flex flex-col items-start'>
                            <p className='sm:text-lg text-sm font-medium'>Secure Payment</p>
                            <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdOutlineMessage className='sm:w-10 sm:h-10 w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                        <div className='flex flex-col items-start'>
                            <p className='sm:text-lg text-sm font-medium'>Customer Support</p>
                            <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiVanFill className='w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                        <div className='flex flex-col items-start'>
                            <p className='sm:text-lg text-sm font-medium'>Free Delivery</p>
                            <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                        </div>
                    </div>
                </div>

                {/* saved for later products desktop*/}
                <div className="hidden sm:block border border-stone-300 rounded p-4 mx-4 mb-6 bg-white">
                    <h1 className="text-2xl font-bold mb-2">Saved For Later</h1>

                    <div className="overflow-x-auto">
                        {savedItems.length === 0 ? (
                            <p className='p-6 text-stone-600 text-lg'>No products found !!!</p>
                        ) : (
                            <div className="flex gap-4 w-max">
                                {savedItems.map((prod, indx) => (
                                    <div key={indx}
                                        className="flex flex-col items-start  w-64 border border-stone-300 rounded-md  flex-shrink-0"
                                    >
                                        <div className="w-full h-48  bg-white rounded-md">
                                            <img src={prod.image} alt={prod.name} className="w-full h-full object-cover rounded-t-md" />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-2 bg-gray-200 p-2 w-full">
                                            <p className="text-lg truncate text-stone-800 font-medium">{prod.name}</p>
                                            <p className="text-lg  text-stone-500 font-medium">$ {prod.price}</p>
                                            <button onClick={async () => {
                                                await addToCart(prod._id);
                                                await removeSavedItem(prod._id);
                                                await getCartItems();
                                                window.scrollTo({ top: 0, behavior: "smooth" })
                                            }}
                                                className="font-medium flex items-center self-center gap-2 text-blue-500 px-3 py-2 border border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 rounded">
                                                <IoCartOutline className="text-2xl" /> Move to cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* saved for later for mobile */}
                <div className="sm:hidden border border-stone-300 rounded p-3 w-full mb-6 bg-white">
                    <h1 className="text-xl font-bold mb-4">Saved For Later</h1>

                    <div className="flex flex-col gap-4 bg-gray-50 p-2 rounded">
                        {savedItems.length === 0 ?
                            <p className='p-4 text-stone-500 text-sm'>No products found!!!</p>
                            : savedItems.map((prod, indx) => (
                                <div key={indx}
                                    className="flex flex-row items-start gap-2 border border-stone-300 rounded p-2 w-full"
                                >
                                    <div className="w-28 h-28  bg-white rounded">
                                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover rounded" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg text-stone-800 font-medium">{prod.name}</p>
                                        <p className="text-[15px] text-stone-500 font-medium">${prod.price}</p>

                                        <div className="flex items-start gap-2 mt-2">
                                            <button
                                                onClick={async () => {
                                                    await addToCart(prod._id);
                                                    await removeSavedItem(prod._id);
                                                    await getCartItems();
                                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                                }}
                                                className="text-blue-500 truncate text-sm bg-gray-200 px-3 py-1 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                                                Move to Cart
                                            </button>
                                            <button
                                                onClick={() => removeSavedItem(prod._id)}
                                                className="text-red-500 text-sm bg-gray-200 px-3 py-1 border border-gray-200 hover:border-red-500 rounded hover:bg-red-500 hover:text-white">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* design  100 USD shop now */}
                <div className='mt-6 w-full h-28 px-8 rounded-md relative hidden sm:flex items-center justify-between 
              bg-[linear-gradient(60deg,_#3B82F6_60%,_#1D4ED8_40%)]'>
                    <div className='flex flex-col p-2'>
                        <p className='text-2xl font-bold  text-white'>Super Discount on more than 100 USD</p>
                        <p className='text-lg text-white'>Have you ever finally just write dummy info</p>
                    </div>
                    <button className='text-white bg-orange-400 px-4 py-2 cursor-pointer rounded-md'>
                        Shop now
                    </button>

                </div>

            </div>
        </>
    )
}

export default Cart