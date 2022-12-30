import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AllBuyers from './AllUsers';
import Categories from './Categories';

const DashBoard = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=' max-w-screen-xl min-h-screen pt-10 rounded-xl mx-auto'>
            <h2 className='text-3xl font-bold text-center py-10'>Hello, {user.displayName}! Welcome to DashBoard</h2>

            <div className="grid grid-cols-6">
                <div className="col-span-2 bg-red-300 rounded-xl">
                    <Categories />
                </div>
                <div className="col-span-4 bg-base-200 rounded-xl">
                    <AllBuyers />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;