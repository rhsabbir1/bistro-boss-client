import React from 'react';
import MenuItem from '../../shard/MenuItem/MenuItem';
import Cover from '../../shard/Cover/Cover';

const MenuItems = ({items, title , img}) => {
    return (
        <div className='my-16'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
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