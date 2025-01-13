import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-gray-200">
      <h1 className="text-6xl font-bold mb-6 text-yellow-300">About This Blog</h1>
      <p className="text-lg text-center max-w-3xl mb-8">
        Welcome to our blog! Here, we share insights, stories, and tips on various topics that inspire and inform our readers. Our mission is to create a community where ideas can flourish and knowledge can be shared.
      </p>
      <p className="text-lg text-center max-w-3xl">
        Thank you for visiting, and we hope you enjoy reading our posts!
      </p>
    </div>
  );
};

export default About;