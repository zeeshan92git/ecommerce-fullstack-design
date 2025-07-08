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
    { icon: 'IoIosSearch', img: 'https://res.cloudinary.com/dophfzeep/image/upload/v1750439442/es-1_kbd2ec.jpg', descr: 'Source from Industry Hubs' },
    { icon: 'BiBox', img: 'https://res.cloudinary.com/dophfzeep/image/upload/v1750439457/es-2_izxndg.jpg', descr: 'Customize Your Products' },
    { icon: 'IoMdSend', img: 'https://res.cloudinary.com/dophfzeep/image/upload/v1750439562/es-3_gkkvg3.jpg', descr: 'Fast, reliable shipping by ocean or air' },
    { icon: 'BsShieldShaded', img: 'https://res.cloudinary.com/dophfzeep/image/upload/v1750439579/es-4_kohl0g.jpg', descr: 'Product monitoring and inspection' }
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
        <div className="bg-white">
            <section className="max-w-7xl mx-auto sm:p-4 p-2 bg-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">Our Extra Services</h2>

                <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
                    {services.map((serv, index) => {
                        const IconComponent = iconMap[serv.icon];
                        return (
                            <div key={index} className="rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition duration-300">
                                {/* Image + Icon Section */}
                                <div className="relative">
                                    <img src={serv.img} alt={serv.descr} className="w-full h-32 sm:h-36 object-cover"/>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 z-0" />
                                    <div className="absolute -bottom-5 right-5 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10">
                                        {IconComponent && (
                                            <IconComponent className="text-xl text-black" />
                                        )}
                                    </div>
                                </div>
                                {/* Description Section */}
                                <div className="p-4 pt-8 bg-white">
                                    <p className="text-gray-800 font-medium text-base sm:text-lg">
                                        {serv.descr}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            <section className="max-w-7xl mx-auto sm:p-4 p-2 mt-4 bg-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Suppliers by region</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {shipflags.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 w-full sm:w-auto">
                            <img src={item.flag} alt={item.name} className="w-12 h-8 object-cover rounded-sm border" />
                            <div>
                                <p className="text-base sm:text-lg font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}

export default ExtraServices;
