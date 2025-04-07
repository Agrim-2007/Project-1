import React from 'react';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
      <div className="logo">
        <h1 className='text-bold text-center'>OG</h1>
        <h5 className='text-bold text-center'>Designs</h5>
      </div>
      <div className="links flex gap-10">
        <a href="./Featured.jsx" className="text-lg capitalize font-light">Our work</a>
        <a href="./Marquee.jsx" className="text-lg capitalize font-light">Tech-Stack</a>
        <a href="./Footer.jsx" className="text-lg capitalize font-light">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
