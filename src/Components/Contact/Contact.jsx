import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center py-7'>
            <form className='mt-9'>
                <div className='text-center'>
                    <h6 className="pl-3 md:contact-title text-5xl text-black font-bold mb-6">Let's Design Togather</h6>
                    <p className='pl-3 md:contact-title'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br />
                        netus in. Aliquet donec morbi convallis pretium</p>
                </div>
                <fieldset className="pl-3 md: w-full flex justify-center">

                    <div className="join w-full max-w-md gap-5 my-15">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input input-bordered join-item rounded-lg border-gray-600" />
                        <button className="btn bg-[#FD6F00] text-white rounded-lg">Contact Me</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Contact;