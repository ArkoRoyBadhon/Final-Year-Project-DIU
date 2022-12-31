import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AddProduct from './AddProduct';
import AllUsers from './AllUsers';
import Categories from './Categories';

const DashBoard = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [boolValue, setBoolValue] = useState(false);
    const [cLocation, setCLocation] = useState("");

    const handleLink = () => {
        setBoolValue(true);
    }

    useEffect(() => {
        const currentURL = window.location.href
        // console.log(currentURL);
        setCLocation(currentURL)
        setBoolValue(false)
    }, [boolValue])

    return (
        <div className=' max-w-screen-xl min-h-screen pt-10 rounded-xl mx-auto'>
            <h2 className='text-3xl font-bold text-center py-10 text-black'>Hello, {user.displayName}! Welcome to DashBoard</h2>

            <div className="grid grid-cols-6">
                <div className="col-span-2 bg-red-300 rounded-xl">
                    <Categories handleLink={handleLink} />
                </div>
                <div className="col-span-4 bg-base-200 rounded-xl">
                    {
                        cLocation === "http://localhost:3000/dashboard" && <AllUsers />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/addProduct" && <AddProduct />
                    }
                </div>
            </div>
        </div>
    );
};

export default DashBoard;