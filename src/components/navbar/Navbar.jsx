import React from 'react';
import dollarImg from '../../assets/dollar 1.png';
import logoImg from '../../assets/logo.png';

const Navbar = ({ coin }) => {
    return (
        <div className='py-10'>
            <div className="navbar bg-base-100 max-w-7xl mx-auto h-18 flex justify-between items-center">

                {/* LEFT: Mobile Menu + Logo */}
                <div className="flex items-center gap-2">

                    {/* Mobile Dropdown (LEFT e) */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Fixture</a></li>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Schedules</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost">
                        <img src={logoImg} alt="Logo" />
                    </a>
                </div>

                {/* RIGHT: Desktop Menu + Coin */}
                <div className="flex items-center gap-5">

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-10 items-center">
                        <a href="#">Home</a>
                        <a href="#">Fixture</a>
                        <a href="#">Teams</a>
                        <a href="#">Schedules</a>
                    </div>

                    {/* Coin */}
                    <button className="border border-dotted p-3 rounded-xl flex items-center gap-3">
                        <p className='font-bold'>{coin.toLocaleString()} Coin</p>
                        <img src={dollarImg} alt="$" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;