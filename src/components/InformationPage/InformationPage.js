import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpertsDetails from './ExpertsDetails';


const division = [
    { name: "Rangpur" },
    { name: "Rajshahi" },
    { name: "Barishal" }
]

const link = [
    {
        "category": "Birgonj",
        "link": "http://birganj.dinajpur.gov.bd/"
    },
    {
        "category": "Kaharol",
        "link": "http://kaharol.dinajpur.gov.bd/"
    },
    {
        "category": "Khanshama",
        "link": "http://khansama.dinajpur.gov.bd/"
    },
    {
        "category": "Parbatipur",
        "link": "http://parbatipur.dinajpur.gov.bd/"
    }
]


const InformationPage = () => {
    const [divisionName, setDivisionName] = useState(null);
    const [districtName, setDistrictName] = useState(null);
    const [upazilaName, setUpazilaName] = useState(null);
    const [fetchLink, setfetchLink] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const [allDistrict, setAllDistrict] = useState([]);
    const [allUpazila, setAllUpazila] = useState([]);


    const handleLink = () => {
        setIsActive(true);
    }


    useEffect(() => {
        if (division !== null) {
            fetch(`https://finer-year-project-server.vercel.app/district/${divisionName}`)
                .then(res => res.json())
                .then(data => setAllDistrict(data))
        }
    }, [divisionName])

    useEffect(() => {
        if (districtName !== null) {
            fetch(`https://finer-year-project-server.vercel.app/upazila/${districtName}`)
                .then(res => res.json())
                .then(data => setAllUpazila(data))
        }
    }, [districtName])

    useEffect(() => {
        setDistrictName("");
        setIsActive(false)
    }, [divisionName])

    useEffect(() => {
        setUpazilaName("")
        setIsActive(false)
    }, [districtName])

    useEffect(() => {
        if (upazilaName !== null) {
            fetch(`https://finer-year-project-server.vercel.app/links/${upazilaName}`)
                .then(res => res.json())
                .then(data => setfetchLink(data))
        }
    }, [upazilaName])

    // console.log('client', allDistrict);

    return (
        <div className='mt-10'>
            <div className="my-5">
                <h2 className='text-xl font-bold text-red-400'>Select Your Area For More Details of Experts</h2>
            </div>
            <div className="w-3/5 lg:w-3/6 mx-auto grid lg:grid-cols-3 gap-5">
                <div className="dropdown dropdown-end">
                    <input defaultValue={divisionName} type="text" className='input input-bordered' placeholder='Please select your Division' />
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        {
                            division?.map(divi =>
                                <li key={divi._id}><Link onClick={() => setDivisionName(`${divi.name}`)}>{divi.name}</Link></li>
                            )
                        }
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    {
                        divisionName ? <>
                            <input defaultValue={districtName} type="text" className='input input-bordered' placeholder='Please select your District' />
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {
                                    allDistrict?.map(divi =>
                                        <li key={divi._id}><Link onClick={() => setDistrictName(`${divi.name}`)}>{divi.name}</Link></li>
                                    )
                                }
                            </ul>
                        </>
                            :
                            <>
                                <input disabled defaultValue={districtName} type="text" className='input input-bordered' placeholder='Please select your District' />
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    {
                                        allDistrict?.map(divi =>
                                            <li key={divi._id}><Link onClick={() => setDistrictName(`${divi.name}`)}>{divi.name}</Link></li>
                                        )
                                    }
                                </ul>
                            </>
                    }
                </div>

                <div className="dropdown dropdown-end">
                    {
                        districtName ? <>
                            <input defaultValue={upazilaName} type="text" className='input input-bordered' placeholder='Please select your Upazila' />
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {
                                    allUpazila?.map(divi =>
                                        <li key={divi._id}><Link onClick={() => setUpazilaName(`${divi.name}`)}>{divi.name}</Link></li>
                                    )
                                }
                            </ul>
                        </>
                            :
                            <>
                                <input disabled defaultValue={districtName} type="text" className='input input-bordered' placeholder='Please select your District' />
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    {
                                        allUpazila?.map(divi =>
                                            <li key={divi._id}><Link onClick={() => setUpazilaName(`${divi.name}`)}>{divi.name}</Link></li>
                                        )
                                    }
                                </ul>
                            </>
                    }
                </div>
            </div>
            {
                upazilaName ? <button onClick={handleLink} className="btn my-8">Search</button>
                    :
                    <button disabled className="btn my-8">Search</button>
            }

            <hr className='max-w-screen-lg mx-auto mt-10' />

            {
                (isActive) && <ExpertsDetails fetchLink={fetchLink[0].link} />
                // (isActive) && console.log(fetchLink[0].link)
            }

        </div>
    );
};

export default InformationPage;