import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Categories = ({handleLink}) => {

    const handleAdmin = () => {
        toast("Comming Soon.....")
    }

    return (
        <div className='max-w-screen-lg py-10 h-full text-center bg-green-400 '>
            {/* <h4 className="text-xl font-bold text-black"></h4> */}

            <ul className="py-5">
                <Link onClick={handleLink} to='/dashboard' className="btn w-3/5 my-2">All Users</Link>
                <Link onClick={handleLink} to="/dashboard/addProduct" className="btn w-3/5 my-2">Add Product</Link>
                <Link onClick={handleLink} to="/dashboard/showproduct" className="btn w-3/5 my-2">Show Product</Link>
                <Link onClick={handleLink} to="/dashboard/makeadmin" className="btn w-3/5 my-2">Make Admin</Link>
                <Link onClick={handleLink} to="/dashboard/addemployee" className="btn w-3/5 my-2">Add Employee</Link>
                <Link onClick={handleLink} to="/dashboard/viewemployee" className="btn w-3/5 my-2">View Employee</Link>
            </ul>
        </div>
    );
};

export default Categories;