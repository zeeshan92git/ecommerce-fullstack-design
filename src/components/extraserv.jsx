import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { BiBox } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { BsShieldShaded } from "react-icons/bs";

const iconMap = {
    IoIosSearch: IoIosSearch,
    BiBox: BiBox,
    IoMdSend: IoMdSend,
    BsShieldShaded: BsShieldShaded,
};

const services = [
    { icon: 'IoIosSearch', img: '/images/es-1.jpeg', descr: 'Source from Industry Hubs' },
    { icon: 'BiBox', img: '/images/es-2.jpeg', descr: 'Customize Your Products' },
    { icon: 'IoMdSend', img: '/images/es-3.jpeg', descr: 'Fast, reliable shipping by ocean or air' },
    { icon: 'BsShieldShaded', img: '/images/es-4.jpeg', descr: 'Product monitoring and inspection' }
];

const shipflags = [
    { name: "United States", flag: "https://flagcdn.com/us.svg", company: "shopname.ae" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg", company: "shopname.ae" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg", company: "shopname.ae" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg", company: "shopname.ae" },
    { name: "France", flag: "https://flagcdn.com/fr.svg", company: "shopname.ae" },
    { name: "India", flag: "https://flagcdn.com/in.svg", company: "shopname.ae" },
    { name: "Pakistan", flag: "https://flagcdn.com/pk.svg", company: "shopname.ae" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg", company: "shopname.ae" },
    { name: "China", flag: "https://flagcdn.com/cn.svg", company: "shopname.ae" },
    { name: "Arabic Emirates", flag: "https://flagcdn.com/ae.svg", company: "shopname.ae" },
];

function ExtraServices() {
    
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8 mt-4 bg-white ">
                <h2 className="text-3xl font-bold mb-6">Our extra services</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {services.map((serv, index) => {
                        const IconComponent = iconMap[serv.icon];
                        return (
                            <div key={index} className='rounded-lg overflow-hidden shadow-sm border'>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 z-0" />
                                    <img src={serv.img} alt="img" className='w-full h-28  object-cover' />
                                    <div className="absolute -bottom-5 right-5 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                                        {IconComponent && <IconComponent className="text-xl text-black" />}
                                    </div>
                                </div>
                                <div className="p-4 pt-8">
                                    <p className="text-gray-800 font-medium text-lg">{serv.descr}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8 mt-4 bg-white">
                <h2 className="text-3xl font-bold mb-6">Suppliers by region</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {shipflags.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4"
                        >
                            <img
                                src={item.flag}
                                alt={item.name}
                                className="w-12 h-8 object-cover rounded-sm border"
                            />
                            <div>
                                <p className="text-xl font-bold">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default ExtraServices;
