import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-500'>--- {subHeading} ---</p>
            <h1 className='text-3xl border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;