import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Shared/Footer';
import Navbar from '../../components/Shared/Navbar';

const Main = () => {
    return (
        <div className=' flex flex-col justify-between'>
            <Navbar />
            <Outlet />
            <Footer className=''/>
        </div>
    );
};

export default Main;