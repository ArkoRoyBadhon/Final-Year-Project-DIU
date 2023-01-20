import React from 'react';
import errorImg from  '../../assets/gitff/404.gif'


const ErrorPage = () => {
    return (
        <div className='flex justify-center align-middle flex-col w-[90%] mx-auto'>
            <h2 className="mt-20 text-2xl font-bold text-red-700 text-center">Oooppss! Wrong Route</h2>
            <img className='w-[20rem] mx-auto' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;