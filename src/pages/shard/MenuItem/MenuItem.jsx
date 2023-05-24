import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe , price} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0  200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
            <div>
                <h1 className='uppercase font-semibold'>{name} ----------------------------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400 font-semibold'>${price}</p>
        </div>
    );
};

export default MenuItem;