import React, { useState } from 'react';
import Cover from '../../shard/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useHooks';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categorics =['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']
    const {category} = useParams()
    const initialIndex = categorics.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
   
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss/order</title>
            </Helmet>
            <Cover img={coverImg} title={'Order Food'}></Cover>
            <div className='text-center mt-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                      <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;