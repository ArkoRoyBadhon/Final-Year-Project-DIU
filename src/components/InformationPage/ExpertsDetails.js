import React from 'react';

const ExpertsDetails = ({ fetchLink, upazilaName, districtName }) => {
    console.log(fetchLink);
    return (
        <div className='min-h-screen w-4/5 mx-auto mt-10'>
            <h2 className="text-center capitalize text-black font-bold my-5">{upazilaName}, {districtName}</h2>
            {/* <iframe width="100%" height="800rem" src={fetchLink} frameborder="0" title='this is web page'></iframe> */}
            {/* <iframe width="100%" height="800rem" src={fetchLink} frameborder="0" title='this is web page'></iframe> */}
            <img className='rounded-lg' src="https://i.ibb.co/pJGFsHB/Screenshot-20221231-010037.png" alt="" />
        </div>
    );
};

export default ExpertsDetails;