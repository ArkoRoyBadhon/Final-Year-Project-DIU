import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Shop = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://cropdoctor-server.vercel.app/items?len=3`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => toast.error(err.message))
    }, [])

    return (
        <div className='pt-20'>
            <div className="w-[92%] max-w-[1440px] mx-auto  ">
                <div className='text-center '>
                    <h2 className='text-2xl font-bold pt-10 pb-5'>Shop Medicine and Machinaries</h2>
                    <p className='text-xl max-w-[80%] mx-auto '>Shop any products, any where around Bangladesh.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 w-[95%] mx-auto mt-5'>
                    {
                        data && data.map(product =>
                            <div className='text-center flex flex-col gap-3 bg-green-200 shadow-md rounded-lg max-w-[300px] border-2 border-green-200 mx-auto md:mx-0'>
                                <img src={product.photo} alt="" className='h-64 w-full  mx-auto rounded-t-md' />
                                <div className='p-2 font-bold'>
                                    <p className='text-lg '>{product.name}</p>
                                    <p className='text-rose-600'><del>{product.originalPrice}Tk</del></p>
                                    <p className='text-green-800'>{product.price}Tk</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;