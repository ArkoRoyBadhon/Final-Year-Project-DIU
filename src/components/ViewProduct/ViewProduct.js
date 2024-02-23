import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../Shared/Loader';
// import ratingIcon from '../../asset/rating-icon.png';
import { AiFillStar } from 'react-icons/ai';

const ViewProduct = () => {

    const location = useLocation()
    const id = location.pathname.split('/')[3]
    console.log(id)
    const [productData, setProductData] = useState(null)

    useEffect(() => {

        fetch(`https://cropdoctor-server.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductData(data)
                console.log(data);
            })
    }, [id])

    return (
        <div className="p-10 ">
            {
                productData === null && <Loader></Loader>
            }
            {
                productData ? <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                    <div className='flex justify-center'>
                        <img src={productData?.photo} alt="" className='max-h-[550px] w-[100%]' />
                    </div>
                    <div className='grid grid-cols-1 gap-4 '>
                        <div>
                            <p className='uppercase text-slate-500 text-lg font-semibold'>{productData.category}</p>
                            <h2 className='text-xl font-bold'>{productData.name}</h2>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5  md:gap-24 '>
                            <div>
                                <p className='uppercase text-slate-500 text-lg font-semibold'>PRICE</p>
                                <h2 className='text-xl font-bold text-green-600'>{productData.price}Tk</h2>
                                <p className='text-slate-500'>*Free shipping</p>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <AiFillStar className='w-6 h-6 text-rose-600' alt="" />
                                    <AiFillStar className='w-6 h-6 text-rose-600' alt="" />
                                    <AiFillStar className='w-6 h-6 text-rose-600' alt="" />
                                    <AiFillStar className='w-6 h-6 text-rose-600' alt="" />
                                    <AiFillStar className='w-6 h-6 text-rose-600' alt="" />
                                </div>
                                <p className='text-slate-600'>(73 Reviews)</p>
                            </div>
                        </div>
                        {/* description */}
                        <div className='flex gap-2'>
                            <p className='font-bold w-fit pb-1 mb-2  border-slate-800'>Company:</p>
                            <p>{productData?.company}</p>
                        </div>
                        <div>
                            <h4 className='border-b-2 w-fit pb-1 mb-2  border-slate-800'>Description</h4>
                            <p>{productData.description}</p>
                        </div>
                        {/* quantity +  color */}
                        <div className='flex flex-col md:flex-row gap-5 md:gap-20'>
                            <div>
                                <p className='text-lg font-bold'>Quantity</p>
                                <div className='flex gap-4 mt-4 font-bold'>
                                    <button className='border-2 border-slate-800  w-7 '>-</button>
                                    <p>1</p>
                                    <button className='border-2 w-7 border-slate-800'>+</button>
                                </div>
                            </div>

                        </div>
                        {/* button */}
                        <div className='flex flex-wrap  gap-4 mt-10'>
                            <button className='btn rounded-none bg-slate-800 text-white px-7 w-fit min-w-[200px]'>ADD TO CART</button>
                            <button className='btn rounded-none border-2 bg-white text-slate-800 hover:text-white w-fit min-w-[200px]'>ADD TO FAVOURITE</button>
                        </div>
                    </div>
                </div> : <h2 className='text-center text-rose-500 text-lg font-bold'>No data.</h2>
            }
        </div>
    );
}

export default ViewProduct;