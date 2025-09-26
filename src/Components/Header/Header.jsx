import React from 'react';
import HomeImg from '../../assets/header-pic.jpg';
const Header = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-around px-10 py-8 my-25'>
            <div className='items-center justify-center'>
                <h1 className='font-medium mt-9 text-xl'>Hi I am</h1>
                <h1 className='text-orange-500 font-medium text-xl'>Muhammad Umair</h1>
                <h3 className='text-5xl font-bold'>UI & UX <p className='pl-21'>Designer</p></h3>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quia asperiores<br />
                    minus hic a itaque voluptatem architecto, cupiditate adipisci quod repellendus<br />
                    facilis atque ab aspernatur eveniet repudiandae voluptatum beatae! Optio.
                </p>
                <button className='btn bg-[#FD6F00] text-white mt-4'> <a href="#contact">Hire me</a></button>
            </div>

            <div>
                <img src={HomeImg} alt="" className='h-100 ' />
                <div className='w-50 h-10 bg-orange-400/50 transform -translate-y-85 translate-x-17'></div>
                <nav>

                    <div className="grid grid-flow-col px-10 gap-7">
                        <a href="https://www.facebook.com/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" fill="none" />
                                <path fill="black" d="M13 9h2V6h-2c-1.7 0-3 1.3-3 3v2H8v3h2v6h3v-6h2.1l.9-3H13V9z" />
                            </svg>
                        </a>

                        <a href='https://x.com/?lang=en'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 
                 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
                 1.3-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 
                 2a3 3 0 110 6 3 3 0 010-6zm6.5-2a1.5 1.5 0 100 
                 3 1.5 1.5 0 000-3z"/>
                            </svg>
                        </a>



                        <a href="https://www.linkedin.com/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M4.98 3.5c0 1.38-1.1 2.5-2.49 
                 2.5A2.5 2.5 0 010 3.5C0 2.12 1.1 1 
                 2.49 1 3.87 1 4.98 2.12 4.98 
                 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 
                 1.7-2.2 3.9-2.2 4.2 0 5 2.8 5 
                 6.4V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 
                 2-2.9 4V24h-4V8z"/>
                            </svg>
                        </a>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Header;