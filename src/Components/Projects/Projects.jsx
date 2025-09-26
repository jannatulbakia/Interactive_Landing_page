import React from 'react';
import Pro1 from '../../assets/pro1.jpg';
import Pro2 from '../../assets/pro2.jpg';
import Pro3 from '../../assets/pro3.jpg';
const Projects = () => {
    return (
        <div className='my-15'>

            <div className='justify-center text-center'>
                <h1 className='text-4xl font-bold my-5'>Projects</h1>
                <p className='mb-2'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br /> lectus. Phasellus consequat urna tellus</p>

                <div className='flex flex-wrap justify-center gap-2 mb-6'>
                    <button className='btn '>All</button>
                    <button className='btn '>UI/UX</button>
                    <button className='btn bg-[#FD6F00] text-white'>Web Design</button>
                    <button className='btn e'>App Design</button>
                    <button className='btn '>Graphics Design</button>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-10 '>
                <div className='my-3'>
                    <img src={Pro1} alt="1" className='h-110' />
                    <h1 className='text-orange-500'>Web Design</h1>
                    <p className='font-semibold'>AirCalling Landing Page Design</p>

                </div>

                <div className='my-4'>
                    <img src={Pro2} alt="2" className='h-110' />
                    <h1 className='text-orange-500'>Web Design</h1>
                    <p className='font-semibold'>Business Landing Page Design</p>

                </div>

                <div className='my-2'>
                    <img src={Pro3} alt="3" className='h-110' />
                    <h1 className='text-orange-500'>Web Design</h1>
                    <p className='font-semibold'>Ecom Web Page Design</p>

                </div>
            </div>
        </div>
    );
};

export default Projects;