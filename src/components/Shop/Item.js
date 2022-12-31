import React from 'react';

const Item = ({ item }) => {
    const { name, photo, originalPrice, price, description, company, location, category } = item;
    return (
        <div className="bg-base-100 shadow-xl rounded-xl">
            <figure><img className='w-full h-[24rem] rounded-t-xl' src={photo} alt="Shoes" /></figure>
            <div className="card-body h-[20rem]">
                <h2 className="card-title">{name}</h2>
                <small className="text-[0.8rem] ">Company: {company}</small>
                <h4 className=''>Price: {price} Tk</h4>
                <p className="">Market Price: <del>{originalPrice} Tk</del></p>
                <p className="">Avalibale: {location}</p>
                <p>Details: {description.slice(0,80)} ...</p>
            </div>
            <div className="flex justify-evenly">
                <button className="btn btn-outline my-5">Buy Now</button>
                <button className="btn my-5">More Info</button>
            </div>
        </div>
    );
};

export default Item;