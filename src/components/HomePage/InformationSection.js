import React from 'react';

const InformationSection = () => {
    return (
        <div className='pt-20 '>
            <div className='shadow-md bg-green-200 w-[92%] max-w-[1440px] mx-auto  rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <div className='p-10 flex flex-col gap-3 justify-center'>
                    <h2 className='font-bold text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime alias fugiat vero! At fugit reiciendis tempora earum nihil voluptates reprehenderit voluptas, veritatis sequi? Nesciunt beatae cum dolorum, earum sit quasi!</p>
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