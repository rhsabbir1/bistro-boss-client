import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shard/Footer/Footer';
import Navber from '../pages/shard/Navber/Navber';

const Main = () => {
    return (
        <>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;