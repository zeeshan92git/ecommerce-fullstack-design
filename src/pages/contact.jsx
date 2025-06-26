import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Image */}
        <div className="w-full h-96">
          <img
            src="https://res.cloudinary.com/dophfzeep/image/upload/v1750701476/login-ecommerce_zmngtp.webp"
            alt="contact us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Have questions or need support? We’re here to help you with anything related to Brand.</p>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none" />
            <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded-md px-4 py-2 h-28 resize-none outline-none" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
