import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [dropdownValue, setDropDownValue] = useState("");


    return (
        <div>
            <h2>Home page</h2>
            <p>This is navbar</p>

            <div className="hero h-[40rem] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-red-400 font-bold">Check Your Crops with Crop Doctor</h1>
                        <div className="border flex my-10 mx-16">
                            <div className="dropdown dropdown-end">
                                <input defaultValue={dropdownValue} type="text" className='input' />
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <li><Link onClick={()=>setDropDownValue("potato")}>potato</Link></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <button className='btn'>Select</button>
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;