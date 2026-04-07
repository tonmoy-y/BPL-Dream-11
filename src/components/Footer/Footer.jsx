import React from 'react';
import FooterNewsletter from './FooterNewsletter';
import footerImg from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='mt-90 bg-[#06091A] relative pt-60'>
            <div className='absolute -top-40 w-full'>
                <FooterNewsletter></FooterNewsletter>
            </div>
                    <div className='max-w-7xl mx-auto pb-15'>
                    <div className='flex justify-center'>
                        <img src={footerImg} alt="" />
                    </div>
                    <div className='mt-8 text-white grid grid-cols-1 xl:grid-cols-3'>
                        <div className='space-y-2.5'>
                            <h3 className='font-semibold text-lg'>About Us</h3>
                            <p>We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
                        </div>
                        <div className='space-y-2.5'>
                            <h3 className='font-semibold text-lg'>Quick Links</h3>
                            <ul className='space-y-3'>
                                <li><a href="#">Home</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='space-y-2.5'>
                            <h3 className='font-semibold text-lg'> Subscribe</h3>
                            <p>Subscribe to our newsletter for the latest updates.</p>
                            <div className='flex'>
                                <input type="email" className='input text-black rounded-r-none border-r-0 focus:outline-none'  placeholder='Enter your email'/>
                                <button className="btn btn-warning font-bold rounded-l-none border-l-none"> Subscribe </button>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <hr className='border text-gray-300'/>
                    <div className='flex items-center'>
                    <p className='py-8 text-white mx-auto'>@2024 Your Company All Rights Reserved.</p>

                    </div>
        </div>
    );
};

export default Footer;