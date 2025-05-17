import React from "react";

// const About = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-200">
//       <h1 className="text-6xl font-bold mb-6 text-yellow-300">About This Blog</h1>
//       <p className="text-lg text-center max-w-3xl mb-8">
//         Welcome to our blog! Here, we share insights, stories, and tips on various topics that inspire and inform our readers. Our mission is to create a community where ideas can flourish and knowledge can be shared.
//       </p>
//       <p className="text-lg text-center max-w-3xl">
//         Thank you for visiting, and we hope you enjoy reading our posts!
//       </p>
//     </div>
//   );
// };
const About = () => {
  return (
      <div className="max-w-2xl mx-auto mt-5 p-8 font-sans shadow-lg dark:border-2 ">
          <h1 className="text-3xl font-bold ">About Us</h1>
          <p className="mt-4">
              Welcome to our website! We are dedicated to providing the best service possible.
              Our team is passionate about what we do and we strive to exceed your expectations.
              In this blog, we aim to share our insights and experiences in the tech industry, 
              covering a range of topics from software development to emerging technologies.
          </p>
          <h2 className="mt-6 text-2xl font-semibold ">Our Mission</h2>
          <p className="mt-2 ">
              Our mission is to deliver high-quality products and services that meet the needs of our customers.
              We believe in the power of knowledge sharing and aim to empower our readers with valuable information 
              that can help them navigate the ever-evolving tech landscape.
          </p>
          <h2 className="mt-6 text-2xl font-semibold">Our Team</h2>
          <p className="mt-2 ">
              We have a diverse team of professionals who are experts in their respective fields.
              Each member brings a unique perspective and skill set, allowing us to tackle complex challenges 
              and provide comprehensive solutions. Together, we are committed to continuous learning and growth, 
              and we look forward to sharing our journey with you through our blog.
          </p>
      </div>
  );
};

export default About;