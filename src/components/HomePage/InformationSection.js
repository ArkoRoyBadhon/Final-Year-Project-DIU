import React from 'react';

const InformationSection = () => {
    return (
        <div className='pt-20 '>
            <div className='shadow-md bg-green-200 w-[92%] max-w-[1440px] mx-auto  rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <div className='p-10 flex flex-col gap-3 justify-center'>
                    <h2 className='font-bold text-2xl '>Get Information To The Near Office</h2>
                    <p>Benefit from agricultural experts' know-how or help fellow farmers with your knowledge and experience:
                        Join the Cropdoctor Community, the largest social network for farmers worldwide.</p>
                    <button className='btn btn-primary bg-[#224229] border-0 w-fit'>Get info</button>
                </div>
                <div>
                    <img src={`https://www.epicgardening.com/wp-content/uploads/2022/06/Blight-on-plants.jpg`} alt="" className='h-full  ml-auto rounded-b-lg md:rounded-r-lg' />
                </div>
            </div>
        </div>
    );
};

export default InformationSection;