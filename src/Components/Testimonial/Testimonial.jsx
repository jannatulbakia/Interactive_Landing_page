import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

import test1 from '../../assets/test-1.jpg';
const testimonials = [
    {
        name: "Name",
        position: "CEO",
        content:
            "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.",
        image: test1,
    },
    {
        name: "Name",
        position: "CEO",
        content: "Sed leo urna velit neque mattis id tellus arcu condimentum.",
        image: test1,
    },
    {
        name: "Name",
        position: "CEO",
        content:
            "Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        image: test1,
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
    };
    return (
        <div className="max-w-9xl mx-auto pt-25 flex flex-col items-center justify-center text-center my-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Testimonials</h2>
            <p className='text-black max-w-2xl mb-10'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br /> lectus. Phasellus consequat urna tellus.</p>
            <div className="w-full md:w-2/4">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-6 text-left bg-gray-100">
                            <img
                                className="w-24 h-24 rounded-full object-cover"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div className="flex flex-col items-center md:items-start">
                                <p className="text-gray-600 mb-2 text-center md:text-left">{testimonial.content}</p>
                                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;