import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { token, setToken, backEndURL } = useContext(AppContext);
    console.log("BaCKENDURL at login.jsx", backEndURL);

    const navigate = useNavigate();
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (state === 'Sign Up') {
                console.log("1..sign up state going\n");
                const { data } = await axios.post(backEndURL + '/api/user/register', { name, email, password });
                if (data.success) {
                    console.log("2..token\n", data.token);
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                    toast.success("Logged in successfully");
                } else {
                    console.log("3..error\n", data.message);
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(backEndURL + '/api/user/login', { email, password });
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                    toast.success("Logged in successfully");
                } else {
                    console.log(data.message);
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [token, navigate]);

    return (

        <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">

            {/* Background Image */}
            <div
                className="hidden lg:block absolute inset-0 bg-cover bg-center opacity-60 z-0"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dophfzeep/image/upload/v1750701476/login-ecommerce_zmngtp.webp')" }}
            />

            {/* Centered Form Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                <form
                    onSubmit={onSubmitHandler}
                    className="backdrop-blur-md bg-white/80 shadow-xl rounded-2xl p-8 max-w-md w-full border border-blue-200"
                >
                    <h2 className="text-3xl font-bold text-center mb-2 text-blue-700">
                        {state === 'Sign Up' ? "Create Account" : "Welcome Back"}
                    </h2>
                    <p className="text-center text-gray-600 mb-6 text-sm">
                        {state === 'Sign Up' ? "Sign up to start your journey" : "Login to continue shopping"}
                    </p>

                    {state === 'Sign Up' && (
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow transition"
                    >
                        {state === 'Sign Up' ? "Create Account" : "Login"}
                    </button>

                    <p className="mt-4 text-center text-sm text-gray-700">
                        {state === 'Sign Up' ? (
                            <>
                                Already have an account?{' '}
                                <span
                                    onClick={() => setState('Login')}
                                    className="text-blue-600 hover:underline cursor-pointer font-medium"
                                >
                                    Login here
                                </span>
                            </>
                        ) : (
                            <>
                                New here?{' '}
                                <span
                                    onClick={() => setState('Sign Up')}
                                    className="text-blue-600 hover:underline cursor-pointer font-medium"
                                >
                                    Sign up
                                </span>
                            </>
                        )}
                    </p>
                </form>
            </div>
        </div>


    );
}

export default Login;
