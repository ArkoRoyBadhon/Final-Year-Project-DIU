import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ShopMain = () => {
    return (
        <div>
            {/* <h2 className="text-xl">This is Shop</h2> */}
            <div className="mt-10 flex justify-evenly w-1/5 mx-auto bg-pink-300 rounded-full ">
                <Link className='text-xl font-bold hover:bg-red-500 p-5 rounded-l-full'>Medicine</Link>

                <Link className='text-xl font-bold p-5 hover:bg-red-500 rounded-r-full'>Machineries</Link>
            </div>

            <hr className="my-5 w-3/5 mx-auto" />
            <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-5">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
};

export default ShopMain;