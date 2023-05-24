import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Catagory></Catagory>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;