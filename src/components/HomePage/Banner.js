import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='w-[80%] mx-auto text-center text-2xl'>
            Reap higher yields with the help of the CropDoctor
            </h4>
            <h1 className=' text-center mt-3 text-2xl font-bold'>Your Crop Doctor</h1>
            <br />
            <Link to='/predict' className='btn bg-[#224229] px-10 '>Predict Here</Link>
        </div>
    );
};

export default Banner;