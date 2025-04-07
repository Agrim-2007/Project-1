import React from 'react';

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-[4.5vw] leading-[3.5vw] tracking-tight'>
        Clean code brings ideas to life, transforming static designs into interactive experiences. Responsive divs adapt fluidly, ensuring beauty and function across every screen size.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div className="w-1/2">
            <h1 className='text-7xl'>LAMBO:</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
            </button>
          </div>
          <div className="w-1/2 h-[60vh] rounded-3xl flex items-center justify-center">

          <img src="https://i.gadgets360cdn.com/large/bgmi_lamborghini_twitter_1648210577081.jpg" alt="Loading..." className="w-full h-full object-cover rounded-3xl bg-gray-50"/>
          </div>
        </div>
    </div>

  )
}

export default About;
