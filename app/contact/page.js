import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black-400 to-gray-500 mb-0" >
      <img src="https://images.pexels.com/photos/30148776/pexels-photo-30148776/free-photo-of-pink-cosmos-flowers-in-a-natural-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Blog Logo" className="mb-0 w-32 h-32 rounded-full shadow-lg" />
      <h1 className="text-4xl font-extrabold text-blue mb-4 drop-shadow-lg">Contact Us</h1>
<div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full transition-transform transform hover:scale-105 ">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Get in Touch</h2>
  <p className="mb-4 text-gray-600 text-center">We would love to hear from you!</p>
  <div className="mb-4 text-center">
    <h3 className="font-medium text-gray-700">Email:</h3>
    <p className="text-gray-800">contact@blogapplication.com</p>
  </div>
  <div className="mb-4 text-center">
    <h3 className="font-medium text-gray-700">Contact Number:</h3>
    <p className="text-gray-800">(123) 456-7890</p>
  </div>
  <div className="mb-4 text-center">
    <h3 className="font-medium text-gray-700">Landline:</h3>
    <p className="text-gray-800">(098) 765-4321</p>
  </div>
  <div>
    <h3 className="font-medium text-gray-700 text-center">Address:</h3>
    <p className="text-gray-800 text-center">123 Blog St, Blog City, BL 12345</p>
  </div>
</div>
    </div>
  );
};

export default ContactPage;