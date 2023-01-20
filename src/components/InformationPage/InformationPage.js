import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const division = [
    { name: "Rangpur" },
    { name: "Rajshahi" },
    { name: "Barishal" }
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
        if (districtName) {
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
        if (upazilaName) {
            fetch(`https://finer-year-project-server.vercel.app/links/${upazilaName}`)
                .then(res => res.json())
                .then(data => setfetchLink(data))
        }
    }, [upazilaName])

    // console.log('client', allDistrict);

    return (
        <div className='py-14 text-center bg-green-100'>
            <div className="my-5">
                <h2 className='text-xl font-normal text-red-600'>Select Your Area For More Details of Experts*</h2>
            </div>
            <div className="w-4/5 lg:w-4/6 mx-auto grid lg:grid-cols-3 gap-5">
                <div className="dropdown dropdown-end">
                    <input defaultValue={divisionName} type="text" className='input input-bordered' placeholder='Select Division' />
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
                            <input defaultValue={districtName} type="text" className='input input-bordered' placeholder='Select District' />
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
                                <input disabled defaultValue={districtName} type="text" className='input input-bordered' placeholder='Select District' />
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
                            <input defaultValue={upazilaName} type="text" className='input input-bordered' placeholder='Select Upazila' />
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
                                <input disabled defaultValue={upazilaName} type="text" className='input input-bordered' placeholder='Select Upazilla' />
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
                upazilaName ? <button onClick={handleLink} className="btn my-8 bg-[#224229] px-6">Search</button>
                    :
                    <button disabled className="btn my-8 bg-[#224229] px-6">Search</button>
            }

            {/* {
                (isActive) ? <ExpertsDetails fetchLink={fetchLink[0].link} upazilaName={upazilaName} districtName={districtName} />
                    // (isActive) && console.log(fetchLink[0].link)
                    :
                    <div className="h-[30rem] mt-10">
                        <h2 className="text-black capitalize">Please search for an Area</h2>
                    </div>
            } */}

        </div>
    );
};

export default InformationPage;