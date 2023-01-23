import React from 'react';

const CropList = () => {
    return (
        <div className='pt-20'>
            <h2 className='text-center text-3xl font-bold'>Plant List</h2>
            <h2 className='text-center text-2xl'>You can predict</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 w-[95%] mx-auto'>
                <div className='rounded-lg bg-green-200 p-10 w-fit mx-auto shadow-md'>
                    <img src={`https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/1/11/0/CI_Brie-Arthur_rice-in-hand.jpg.rend.hgtvcom.616.616.suffix/1610376355164.jpeg`} alt="" className='w-64 h-44 rounded-lg' />
                    <h2 className='mt-3 text-xl font-bold text-center'>Rice</h2>
                </div>
                <div className='rounded-lg bg-green-200 p-10 w-fit mx-auto shadow-md'>
                    <img src={`https://www.thespruce.com/thmb/Nyj6Ryv5MqQcMLQC6qpMiRaDrMs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top-tomato-growing-tips-1402587-10-f09428178dbe4e64b88189ea97d831b8.jpg`} alt="" className='w-64 rounded-lg h-44' />
                    <h2 className='mt-3 text-xl font-bold text-center'>Tomato</h2>
                </div>
                <div className='rounded-lg bg-green-200 p-10 w-fit mx-auto shadow-md'>
                    <img src={`https://mother-nature.ca/wp-content/uploads/2020/04/MN-blog-potato-plant.png`} alt="" className='h-44 w-64 rounded-lg' />
                    <h2 className='mt-3 text-xl font-bold text-center'>Potato</h2>
                </div>
            </div>
        </div>
    );
};

export default CropList;