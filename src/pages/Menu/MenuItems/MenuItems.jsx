import React from 'react';
import MenuItem from '../../shard/MenuItem/MenuItem';

const MenuItems = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10'>
            {
                items.map(item =><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
            </div>
        </div>
    );
};

export default MenuItems;