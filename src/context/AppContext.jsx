import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backEndURL = import.meta.env.VITE_BACKEND_URL;
    //console.log("Backend URL is:", backEndURL);

    const [token, setToken] = useState(() => localStorage.getItem('token') || false);
    console.log("token at appcontext\n",token);
    const [categoriesData, setCategoriesData] = useState([]);
    const [productsData , setProductsData] = useState([]);
    const [userData, setuserData] = useState(false);

    const getCategoriesData = async () => {
        try {
            const response = await axios.get(backEndURL + '/api/category/all-category');
            const { success, data, message } = response.data;

            if (success) {
                //console.log("Categories Data:", data);
                setCategoriesData(data);
            } else {
                console.log("data not fetched on FE", message);
                toast.error(message);
            }
        } catch (error) {
            console.error("Request failed:", error);
            toast.error("Failed to fetch categories.");
        }
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backEndURL + '/api/product/all-product');
            const { success, data, message } = response.data;

            if (success) {
                //console.log("Products Data:", data);
                setProductsData(data);
            } else {
                console.log("Data not fetched on FE", message);
                toast.error(message);
            }
        } catch (error) {
            console.error("Request failed:", error);
            toast.error("Failed to fetch products.");
        }
    };

    const getuserProfileData = async () => {
        try {
            const {data} = await axios.get(backEndURL + '/api/user/get-profile', { headers: { token } });
            if (data.success) {
                console.log("User Data fetched",data);
                setuserData(data.data);
            } else {
                console.log("User Data not found" , data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Request failed:", error);
            toast.error("Failed to fetch user profile data.");
        }
    };

    const value = { categoriesData, setCategoriesData, productsData , getProductsData ,getCategoriesData
         , backEndURL , token, setToken ,userData, setuserData , getuserProfileData};

    useEffect(() => {
        getCategoriesData();
    }, []);

    useEffect(() => {
        getProductsData();
    },[]);

    useEffect(() => {
        if (token) {
            getuserProfileData();
            console.log("user profile data got by useeffect bcz of token\n");
        }
        else{
            setuserData(false);
        }
    }, [token])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;