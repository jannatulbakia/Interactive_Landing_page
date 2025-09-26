import React from 'react';
import './Navstyle.css';
import Logo from '../../assets/logo.jpg';
const Navbar = () => {
    return (
        <div className='fixed left-0 top-0 right-0 z-10'>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#services'>Servies</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#testimonials'>Testimonials</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div className='flex items-center'>
                        <img src={Logo} alt="" className='h-9' />
                        <a className="btn btn-ghost text-xl gap-0">M<span className='text-gray-500 '>umair</span></a>
                    </div>

                </div>
                <div className="flex-none hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#services'>Servies</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#testimonials'>Testimonials</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <button className='btn bg-[#FD6F00] text-white'>
                    <a href='/cv.pdf'
                        download="Mumair_CV.pdf">
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;