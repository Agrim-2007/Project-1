import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-800 py-8 px-6 mt-10 rounded-t-2xl shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
        </div>
        <div className="text-sm text-center sm:text-right space-y-1">
          <p>
            <span className="font-medium">Email: </span>
            <a href="mailto:agrim.malhotra2024@nst.rishihood.edu.in" className="text-blue-600 hover:underline">
              agrim.malhotra2024@nst.rishihood.edu.in
            </a>
          </p>
          <p>
            <span className="font-medium">Phone: </span>
            <a href="tel:8744994671" className="text-blue-600 hover:underline">
              8744994671
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Agrim's Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
