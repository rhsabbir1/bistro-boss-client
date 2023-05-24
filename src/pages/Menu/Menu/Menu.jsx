import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shard/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
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
                <title>Bistro Boss | menu</title>
            </Helmet>
            {/*-------------- offered start ------------ */}

        
            <Cover img={menuImg} title='OUR MENU'></Cover>

         
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>

           
            <MenuItems items={offered}></MenuItems>
            {/*-------------- offered end ------------ */}

            {/*-------------- DESSERTS strrt ------------ */}
            <MenuItems items={dessert}  img={desertImg} title='DESSERTS'></MenuItems>
            {/*-------------- DESSERTS end ------------ */}

            {/*-------------- pizza strrt ------------ */}
            <MenuItems items={pizza}  img={pizzaImg} title='PIZZA'></MenuItems>
            {/*-------------- pizza end ------------ */}


            {/*-------------- salad strrt ------------ */}
            <MenuItems items={salad}  img={saladImg} title='SALADS'></MenuItems>
            {/*-------------- salad end ------------ */}


            {/*-------------- salad strrt ------------ */}
            <MenuItems items={soup}  img={soupImg} title='SOUPS'></MenuItems>
            {/*-------------- salad end ------------ */}


        </div>
    );
};

export default Menu;