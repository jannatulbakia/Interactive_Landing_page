import React from 'react';
import ui from '../../assets/ui.jpg';
import web from '../../assets/web.jpg';
import app from '../../assets/app.jpg';
import graphics from '../../assets/graphics.jpg';
const Services = () => {
    return (
        <div className='my-7 py-18'>

            <div className='text-center justify-center'>
                <h1 className='text-4xl font-bold'>Services</h1>
                <p className='my-8'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br /> netus in. Aliquet donec morbi convallis pretium</p>

            </div>


            <div className='grid grid-rows-1 md:grid-cols-4 gap-5 px-20 '>
                <div className='bg-gray-200 p-4 rounded-xl '>
                    <img src={ui} alt="" />
                    <h1 className='text-lg font-semibold my-2'>UI/UX</h1>
                    <p>Lorem ipsum dolor sit amet <br />consectetur. Morbi diam nisi <br />nam diam interdum</p>
                </div>

                <div className='bg-gray-200 p-4 rounded-xl'>
                    <img src={web} alt="web" />
                    <h1 className='text-lg font-semibold my-2'>Web Design </h1>
                    <p>Lorem ipsum dolor sit amet <br />consectetur. Morbi diam nisi <br />nam diam interdum</p>
                </div>

                <div className='bg-gray-200 p-4 rounded-xl'>
                    <img src={app} alt="web" />
                    <h1 className='text-lg font-semibold my-2'>App Design </h1>
                    <p>Lorem ipsum dolor sit amet <br />consectetur. Morbi diam nisi <br />nam diam interdum</p>
                </div>

                <div className='bg-gray-200 p-4 rounded-xl'>
                    <img src={graphics} alt="web" />
                    <h1 className='text-lg font-semibold my-2'>Graphic Design </h1>
                    <p>Lorem ipsum dolor sit amet <br />consectetur. Morbi diam nisi <br />nam diam interdum</p>
                </div>

            </div>


        </div>
    );
};

export default Services;