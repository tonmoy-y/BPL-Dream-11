import React from 'react';
import heroBackground from '../../assets/bg-shadow.png';
import heroImg from '../../assets/banner-main.png';

const Hero = () => {
    return (
        <div className='mx-auto max-w-7xl bg-black rounded-3xl mb-22 bg-cover' style={{ backgroundImage: `url(${heroBackground})` }} >
            
              <div className='flex flex-col justify-center items-center p-16 border-0  gap-6'>
                <img src={heroImg} alt="Hero image" />
                <h1 className='font-bold text-4xl text-white'> Assemble Your Ultimate Dream 11 Cricket Team </h1>
                <h4 className='text-lg text-gray-300'>Beyond Boundaries Beyond Limits</h4>
               <div className='border border-[#E7FE29] p-2 rounded-xl'>
                 <button className='btn bg-[#E7FE29] rounded-xl font-bold' >Claim Free Credit</button>
               </div>
              </div>
              
            
             
        </div>
    );
};

export default Hero;