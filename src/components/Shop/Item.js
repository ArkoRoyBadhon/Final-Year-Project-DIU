import React from 'react';

const Item = ({ item }) => {
    const { name, photo, originalPrice, price, description, company, location, category } = item;
    return (
        <div className="bg-base-100 shadow-xl rounded-xl">
            <figure><img className='w-full rounded-t-xl' src={photo} alt="Shoes" /></figure>
            <div className="card-body h-[15rem]">
                <h2 className="card-title">{name}</h2>
                <h4 className=''>Price</h4>
                <p>{description}</p>
            </div>
            <div className="flex justify-evenly">
                <button className="btn btn-outline my-5">Buy Now</button>
                <button className="btn my-5">More Info</button>
            </div>
        </div>
    );
};

export default Item;