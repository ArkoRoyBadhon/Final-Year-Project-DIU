import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
    return (
        <div className='max-w-screen-lg my-10 bg-base-200 mx-auto h-[30rem] rounded-lg shadow-2xl mb-10'>
            <h2 className='pt-10 text-2xl font-bold pl-10'>The Predicted Result</h2>
            <div className="pl-10 mt-10 text-left">
                <p className="text-xl font-bold ">Crop Name: Potato</p>
                <p className="text-xl font-bold ">Disease Name: Late Blight</p>
                <p className="text-xl font-bold ">Prediction Accuracy: 97.33%</p>
                <p className="text-xl font-bold ">Solution Details: Benalaxyl (8%)+ Mancozeb (64%)</p>
                <Link className="btn mt-8 ">Detailed result</Link>
            </div>
        </div>
    );
};

export default Result;