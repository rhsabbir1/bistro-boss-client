import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shard/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useHooks';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../MenuItems/MenuItems';


const Menu = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss/ menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title='OUR MENU'
            ></Cover>
            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>
            <MenuItems
                items={offered}
            ></MenuItems>


        </div>
    );
};

export default Menu;