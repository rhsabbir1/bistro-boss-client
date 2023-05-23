import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shard/Footer/Footer';

const Main = () => {
    return (
        <>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;