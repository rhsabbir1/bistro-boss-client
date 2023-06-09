import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import swip1 from '../../../assets/home/slide1.jpg';
import swip2 from '../../../assets/home/slide2.jpg';
import swip3 from '../../../assets/home/slide3.jpg';
import swip4 from '../../../assets/home/slide4.jpg';
import swip5 from '../../../assets/home/slide5.jpg';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Catagory = () => {
    return (
        <>
            <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={swip1} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-16'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip2} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-16'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip3} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-16'>Sups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip4} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-16'>Dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip5} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-16'>Salad</h1>
                </SwiperSlide>
               
            </Swiper>
        </>
    );
};

export default Catagory;