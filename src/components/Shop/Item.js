import React, { useContext } from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Item = ({ item, handleBookedMark }) => {
    const { name, photo, originalPrice, price, description, company, location, category, productId, bookedMark } = item;
    console.log(item);
    const { user, logOut } = useContext(AuthContext);



    return (
        <div className="bg-base-100 shadow-2xl rounded-xl pb-4">
            <figure className='flex justify-center  '><img className='h-[20rem] rounded-xl w-[95%] mx-auto pt-2' src={photo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className=" ">Company: {company}</h4>
                <h4 className=''>Price: <span className='text-green-700 font-semibold'>{price} Tk</span></h4>
                <p className="">Market Price: <del className='text-red-400'>{originalPrice} Tk</del></p>
                <p className="">Avalibale: {location}</p>
                <p>Details: {description.slice(0, 80)} ...</p>
                {
                    bookedMark && bookedMark === true ? <p className='flex gap-2 items-center'>BookedMark: <BsFillBookmarkHeartFill className='text-lg cursor-pointer text-red-500' onClick={() => handleBookedMark(item)} /></p> :
                        <p className='flex gap-2 items-center'>BookedMark: <BsFillBookmarkHeartFill className='text-lg cursor-pointer' onClick={() => handleBookedMark(item)} /></p>
                }
            </div>
            <div className="flex justify-evenly flex-wrap gap-6">
                {
                    user?.uid ? <button className="w-[140px] btn border-0  bg-[#224229] text-white">Buy Now</button> :
                        <Link to='/login' className="w-[140px] btn border-0  bg-[#224229] text-white">Login for Buy</Link>
                }
                <Link to={`viewproduct/${item?.productId}`} className="w-[140px] btn  bg-blue-800 border-0">More Info</Link>
            </div>
        </div>
    );
};

export default Item;