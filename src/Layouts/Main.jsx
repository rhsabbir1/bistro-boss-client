import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shard/Footer/Footer';
import Navber from '../pages/shard/Navber/Navber';

const Main = () => {
    const location = useLocation()
    const noHaderFooter = location.pathname.includes('login') || location.pathname.includes('singUp')
    return (
        <>
        {noHaderFooter || <Navber></Navber>}
        <Outlet></Outlet>
        {noHaderFooter || <Footer></Footer>}
        </>
    );
};

export default Main;