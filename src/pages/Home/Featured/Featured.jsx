import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed text-white my-12 pt-8'>
       
                <SectionTitle
                    subHeading='Check it out'
                    heading='FROM OUR MENU'
                ></SectionTitle>
           
            <div className='bg-black bg-opacity-30 md:flex justify-center items-center pt-12 pb-20  px-36'>
                <div> <img src={img} alt="" /></div>
                <div className='md:ml-10 space-y-2'>
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white'>Order Now</button>
                </div>

            </div>

        </div>
    );
};

export default Featured;