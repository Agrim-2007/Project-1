import React from 'react';

function LandingPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {['Creating', 'eye opening', 'presentations'].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="mr-[1vw] w-[8vw] h-[6vw] bg-green-500 rounded-[0.6vw] relative -top-[0.075vw]"></div>
              )}
              <h1 className="pt-[2vw] -mb-[0.8vw] uppercase text-[9vw] leading-[0.85] font-['Founders_Grotesk_X-Condensed']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          'Render dreams with clean code',
          'Divs dancing in responsive rhythm.',
        ].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">

          <div
            onClick={scrollToTop}
            className="w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full cursor-pointer"
          >
            ↑
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
