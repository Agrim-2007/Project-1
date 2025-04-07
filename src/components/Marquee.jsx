import React from 'react';

function Marquee() {
  return (
    <div className="p-[7rem] bg-[#006BA6] flex items-center justify-center p-0 m-0 rounded-tl-3xl rounded-tr-3xl">
      <div className="w-full border-y-[1px] border-white flex items-center gap-10 overflow-hidden whitespace-nowrap text-center
      py-[3rem] my-0 h-[fit-content]">
        <h1 className="text-[17vw] leading-[0.75] font-['Founders_Grotesk_X-Condensed'] uppercase font-semibold text-white m-0 p-0">
        REACT-JS
        </h1>
        {/* <h1 className="text-[17vw] leading-[0.75] font-['Founders_Grotesk_X-Condensed'] uppercase font-semibold text-white m-0 p-0">
          NSTIAN
        </h1> */}
      </div>
    </div>
  );
}

export default Marquee;
