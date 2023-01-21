import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center mt-10 gap-3 flex-col items-center'>
            <p className='text-lg font-semibold'>Loading...</p>
            <progress className="progress w-56"></progress>
        </div>

    );
};

export default Loader;