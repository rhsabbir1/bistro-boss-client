import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shard/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(data => data.category === 'popular')
                setMenu(populerItems)
            })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
            {
                menu.map(item =><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
            </div>
        </section>
    );
};

export default PopularMenu;