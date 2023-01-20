import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ predictResult }) => {

    return (
        <div className='max-w-screen-lg my-10 bg-base-200 mx-auto h-[30rem] rounded-lg shadow-2xl mb-10'>
            <h2 className='pt-10 text-2xl font-bold pl-10 bg-green-400 text-slate-700 pb-7 uppercase'>The Predicted Result</h2>
            <div className="pl-10 mt-10 text-left flex flex-col gap-4">
                <p className="text-xl font-bold ">Crop Name: {predictResult.pred[1]}</p>
                <p className="text-xl font-bold ">Disease Name: {predictResult.pred[0]}</p>
                <p className="text-xl font-bold ">Prediction Accuracy: 97.33%</p>
                <p className="text-xl font-bold ">Solution Details: Benalaxyl (8%)+ Mancozeb (64%)</p>
                <Link className="btn mt-8 w-fit px-6 bg-green-300 text-black text-lg font-semibold ">Detailed result</Link>
            </div>
        </div>
    );
};

export default Result;