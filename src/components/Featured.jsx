import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='font-["Neue_Montreal"] text-7xl tracking-tight'>Featured Projects</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex mt-10 gap-10">
                    <div className="cardcontainer card w-1/2 h-[75vh]">
                        <div className="card overflow-hidden w-full h-full rounded-xl bg-green-500">
                            <img 
                                className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-95' 
                                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" 
                                alt="" 
                            />
                        </div>
                    </div>

                    <div className="cardcontainer card w-1/2 h-[75vh]">
                        <div className="card overflow-hidden w-full h-full rounded-xl bg-green-500">
                            <img 
                                className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-95' 
                                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" 
                                alt="" 
                            />
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Featured
