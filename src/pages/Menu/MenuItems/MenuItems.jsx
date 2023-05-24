import React from 'react';
import MenuItem from '../../shard/MenuItem/MenuItem';
import Cover from '../../shard/Cover/Cover';
import { Link } from 'react-router-dom';

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
            <div className='text-center'>
            <Link to={`/order/${title}`}><button className="btn btn-outline bg-slate-200 border-b-4 border-0 mt-4">Order Food</button></Link>

            </div>
        </div>
    );
};

export default MenuItems;