import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Image */}
        <div className="w-full h-96">
          <img
            src="https://res.cloudinary.com/dophfzeep/image/upload/v1750701476/login-ecommerce_zmngtp.webp"
            alt="about brand"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content */}
        <div className="p-6 sm:p-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About <span className="italic font-bold text-gray-800">Brand</span></h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to <strong>Brand</strong> – your go-to destination for quality, convenience, and confidence in every purchase.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are an eCommerce platform built with love and driven by passion to offer you a seamless online shopping experience. From the latest tech gadgets to timeless fashion, Brand curates everything with attention to quality and affordability.
          </p>
          <p className="mt-4 text-sm text-gray-500">We deliver across the globe and support multiple secure payment options.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
