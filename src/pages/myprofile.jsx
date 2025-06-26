import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';

function Myprofile() {

    const { userData, setuserData, getuserProfileData, backEndURL, token } = useContext(AppContext);

    console.log("User Data on Profile page", userData);
    const [isEdit, setisEdit] = useState(false);
    const [image, setimage] = useState(false);

    const updateUserProfile = async () => {
        try {

            const formData = new FormData();

            formData.append('name', userData.name);
            formData.append('phone', userData.phone);
            formData.append('address', userData.address);
            formData.append('gender', userData.gender);
            formData.append('dob', userData.dob);

            image && formData.append('image', image);

            const { data } = await axios.post(backEndURL + '/api/user/update-profile', formData, { headers: { token } });
            if (data.success) {
                toast.success(data.message);
                await getuserProfileData();
                setisEdit(false);
                setimage(false);
            }
            else {
                console.log(data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return (

        <>
            <Navbar cart={true} />

            {token ? (
                <div className="max-w-3xl w-full mx-auto bg-gray-100 rounded-xl shadow-md shadow-gray-500 border border-stone-300 mt-6 p-8 space-y-6 text-sm text-gray-800">

                    {/* Profile Picture */}
                    <div className="flex items-center gap-6">
                        <div>
                            {isEdit ? (
                                <label htmlFor="image" className="relative cursor-pointer group">
                                    <img
                                        className="w-36 h-36 object-cover rounded-full border-4 border-blue-200 shadow-md"
                                        src={image ? URL.createObjectURL(image) : userData.image}
                                        alt="Profile"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <span className="text-white text-xs">Change</span>
                                    </div>
                                    <input type="file" id="image" hidden onChange={(e) => setimage(e.target.files[0])} />
                                </label>
                            ) : (
                                <img
                                    className="w-36 h-36 object-cover rounded-full border-4 border-blue-200 shadow-md"
                                    src={userData.image}
                                    alt="Profile"
                                />
                            )}
                        </div>
                        <div>
                            {isEdit ? (
                                <input
                                    className="text-2xl font-semibold border-b-2 border-blue-300 outline-none bg-transparent"
                                    type="text"
                                    value={userData.name}
                                    onChange={(e) => setuserData((prev) => ({ ...prev, name: e.target.value }))}
                                />
                            ) : (
                                <h2 className="text-2xl font-bold text-blue-700">{userData.name}</h2>
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600 mb-2 border-b border-stone-400 pb-1">Contact Information</h3>
                        <div className="grid grid-cols-[120px_1fr] gap-3">
                            <span className="font-medium">Email:</span>
                            <span className="text-blue-500">{userData.email}</span>

                            <span className="font-medium">Phone:</span>
                            {isEdit ? (
                                <input
                                    className="bg-gray-100 p-1 rounded w-64"
                                    type="text"
                                    placeholder="Edit phone..."
                                    value={userData.phone}
                                    onChange={(e) => setuserData((prev) => ({ ...prev, phone: e.target.value }))}
                                />
                            ) : (
                                <span className="text-blue-500">{userData.phone}</span>
                            )}

                            <span className="font-medium">Address:</span>
                            {isEdit ? (
                                <div className="space-y-1">
                                    <input
                                        className="bg-gray-100 p-1 rounded w-64 block"
                                        type="text"
                                        placeholder="Line 1"
                                        value={userData.address?.line1 || ''}
                                        onChange={(e) =>
                                            setuserData((prev) => ({
                                                ...prev,
                                                address: { ...prev.address, line1: e.target.value },
                                            }))
                                        }
                                    />
                                </div>
                            ) : (
                                <span className="text-gray-500">
                                    {userData.address?.line1}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Basic Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600 mb-2 border-b border-stone-400 pb-1">Basic Information</h3>
                        <div className="grid grid-cols-[120px_1fr] gap-3">
                            <span className="font-medium">Gender:</span>
                            {isEdit ? (
                                <select
                                    className="bg-gray-100 p-1 rounded w-32"
                                    onChange={(e) => setuserData((prev) => ({ ...prev, gender: e.target.value }))}
                                    value={userData.gender}
                                >
                                    <option value="">--Select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : (
                                <span className="text-gray-500">{userData.gender}</span>
                            )}

                            <span className="font-medium">DOB:</span>
                            {isEdit ? (
                                <input
                                    className="bg-gray-100 p-1 rounded w-40"
                                    type="date"
                                    onChange={(e) => setuserData((prev) => ({ ...prev, dob: e.target.value }))}
                                    value={userData.dob}
                                />
                            ) : (
                                <span className="text-gray-500">{userData.dob}</span>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="text-center mt-8">
                        {isEdit ? (
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition"
                                onClick={updateUserProfile}
                            >
                                Save Information
                            </button>
                        ) : (
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
                                onClick={() => setisEdit(true)}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>) : (
                <div className="flex flex-col items-center justify-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 font-medium p-6 rounded-md shadow-sm mt-10 max-w-md mx-auto">
                    <p className="text-lg">🚫 Login to shop and make your profile</p>
                    <p className="text-sm text-blue-600">Please sign in to access your personalized shopping experience.</p>
                </div>

            )
            }
        </>

    )
}

export default Myprofile;