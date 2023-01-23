import React from 'react';
import Banner from './Banner';
import CropList from './CropList';
import GetInTouch from './GetInTouch';
import InformationSection from './InformationSection';
import Shop from './Shop';

const Home = () => {
    return (
        <div className='  py-20 '>
            <Banner />
            <CropList />
            <InformationSection />
            <Shop />
            <GetInTouch />
        </div>
    );
};

export default Home;