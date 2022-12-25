import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
    return (
        <div className='max-w-screen-lg my-5 bg-red-100 mx-auto h-[40rem] rounded-lg shadow-2xl'>
            <h2 className='pt-10 text-2xl font-bold'>The Predicted Result</h2>
            <div className="pl-10 mt-10 text-left">
                <p className="">Crop Name: </p>
                <p className="">Diease Name: </p>
                <p className="">Prediction Accuracy: </p>
                <p className="">Diease Details: </p>
                <Link className="btn mt-8 ">Detailed result</Link>
            </div>
        </div>
    );
};

export default Result;