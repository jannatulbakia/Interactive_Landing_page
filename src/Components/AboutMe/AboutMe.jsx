import React from 'react';

import AboutImg from '../../assets/about-me.jpg';
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-13">
      <div>
        <img src={AboutImg} alt="" className='h-90  rounded-full border-4 border-orange-400' />
        <div className='w-50 h-10 bg-orange-400/50 transform -translate-y-77 translate-x-18 '></div>
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-4 pr-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br /> lectus. Phasellus consequat urna tellus
        </p>

        <div className="space-y-5 mt-6">
          {[
            { title: 'UX', percent: 80 },
            { title: 'Website Design', percent: 90 },
            { title: 'App Design', percent: 75 },
            { title: 'Graphic Design', percent: 95 },
          ].map((skill, index) => (
            <div key={index}>
              <p className="font-bold text-gray-800 mb-1">{skill.title}</p>
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div
                  className="h-2 bg-[#FD6F00] rounded-full relative"
                  style={{ width: `${skill.percent}%` }}
                >
                  <div className="absolute -right-2 -top-1 w-4 h-4 bg-white border-2 border-[#FD6F00] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
