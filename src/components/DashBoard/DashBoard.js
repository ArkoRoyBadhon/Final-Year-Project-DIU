import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AddEmployee from './AddEmployee';
import AddProduct from './AddProduct';
import AllUsers from './AllUsers';
import Categories from './Categories';
import MakeAdmin from './MakeAdmin';
import ShowProduct from './ShowProduct';
import ViewEmployee from './ViewEmployee';

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
        <div className='bg-green-100  py-10 px-4 rounded-xl'>
            <h2 className='text-2xl font-semibold text-center pb-6 text-black'>Hello, {user.displayName}!<br/> Welcome to DashBoard</h2>

            <div className="grid grid-cols-10">
                <div className="col-span-2 bg-red-300 rounded-l-xl">
                    <Categories handleLink={handleLink} />
                </div>
                <div className="col-span-8  rounded-r-xl bg-green-200">
                    {
                        cLocation === "http://localhost:3000/dashboard" && <AllUsers />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/addProduct" && <AddProduct />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/showproduct" && <ShowProduct />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/makeadmin" && <MakeAdmin />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/addemployee" && <AddEmployee />
                    }
                    {
                        cLocation === "http://localhost:3000/dashboard/viewemployee" && <ViewEmployee />
                    }
                </div>
            </div>
        </div>
    );
};

export default DashBoard;