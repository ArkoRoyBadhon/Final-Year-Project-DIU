import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const division = [
    { name: "Rangpur" },
    { name: "Rajshahi" },
    { name: "Barishal" }
]

const district = [
    {
        category: "Rangpur", 
        name: "Dinajpur"
    },
    {
        category: "Rangpur", 
        name: "Rangpur"
    },
    {
        category: "Rangpur", 
        name: "Thakurga"
    },
]


const InformationPage = () => {
    const [districtName, setDistrictName] = useState("");
    return (
        <div>
            this is information page
            <br />

            <div className="dropdown dropdown-end">
                <input defaultValue={districtName} type="text" className='input input-bordered' placeholder='Please select your Division' />
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    {
                        division?.map(divi => <>
                            <li><Link onClick={() => setDistrictName(`${divi.name}`)}>{divi.name}</Link></li>
                        </>)
                    }
                </ul>
            </div>

            <div className="dropdown dropdown-end">
                <input defaultValue={districtName} type="text" className='input input-bordered' placeholder='Please select your District' />
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    {
                        division?.map(divi => <>
                            <li><Link onClick={() => setDistrictName(`${divi.name}`)}>{divi.name}</Link></li>
                        </>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default InformationPage;