import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='w-11/12 grid md:grid-cols-3 gap-4 mx-auto my-4'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)

            }
        </div>
    );
};

export default OrderTab;