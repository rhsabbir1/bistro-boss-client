import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

// react icons 
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [revews, setRevews] = useState([])

    useEffect(() => {
        fetch('revew.json')
            .then(res => res.json())
            .then(data => setRevews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading='What Our Clients Say'
                heading='TESTIMONIALS'
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    revews.map(revew => <SwiperSlide
                        key={revew._id}
                    >
                        <div className='w-4/5 mx-auto mb-24 flex flex-col items-center space-y-8'>
                                <FaQuoteLeft className=' text-6xl'></FaQuoteLeft>
                                <Rating

                                    style={{ maxWidth: 180 }}
                                    value={revew.rating}
                                    readOnly
                                />
                          
                            <h2>{revew.details}</h2>
                            <h1 className='text-4xl font-semibold text-orange-400'>{revew.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section >
    );
};

export default Testimonial;