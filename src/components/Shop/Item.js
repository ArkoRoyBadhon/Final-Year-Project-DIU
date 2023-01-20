import React from 'react';

const Item = ({ item }) => {
    const { name, photo, originalPrice, price, description, company, location, category } = item;
    return (
        <div className="bg-base-100 shadow-2xl rounded-xl">
            <figure className='flex justify-center '><img className='h-[20rem] rounded-xl w-[95%] mx-auto pt-2' src={photo} alt="Shoes" /></figure>
            <div className="card-body h-[20rem]">
                <h2 className="card-title">{name}</h2>
                <small className="text-[0.8rem] ">Company: {company}</small>
                <h4 className=''>Price: <span className='text-green-700'>{price} Tk</span></h4>
                <p className="">Market Price: <del className='text-red-400'>{originalPrice} Tk</del></p>
                <p className="">Avalibale: {location}</p>
                <p>Details: {description.slice(0,80)} ...</p>
            </div>
            <div className="flex justify-evenly">
                <button className="btn border-0 my-5 bg-[#224229] text-white">Buy Now</button>
                <button className="btn my-5 bg-blue-800 border-0">More Info</button>
            </div>
        </div>
    );
};

export default Item;