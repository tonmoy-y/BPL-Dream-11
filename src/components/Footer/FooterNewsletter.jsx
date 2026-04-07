import React from 'react';
import bgImg from '../../assets/bg-shadow.png';

const FooterNewsletter = () => {
    return (
        <div className='p-4 rounded-3xl border-2 border-white max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center bg-white bg-cover py-22 rounded-2xl space-y-3.5' style={{ backgroundImage: `url(${bgImg})` }}>
                <h1 className='text-3xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className='text-xl text-medium'>Get the latest updates and news right in your inbox!</p>
                <div className='flex items-center gap-3'>
                    <input className='input w-70' type="email" placeholder="Enter your email" required/>
                    <button className="btn btn-warning font-bold"> Subscribe </button>
                </div>
            </div>
        </div>
    );
};

export default FooterNewsletter;