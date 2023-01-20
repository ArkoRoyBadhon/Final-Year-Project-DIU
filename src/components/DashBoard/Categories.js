import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Categories = ({handleLink}) => {

    const handleAdmin = () => {
        toast("Comming Soon.....")
    }

    return (
        <div className='w-fit py-10 h-full text-center bg-green-900 rounded-l '>
            <ul className="py-5">
                <Link onClick={handleLink} to='/dashboard' className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">All Users</Link>
                <Link onClick={handleLink} to="/dashboard/addProduct" className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">Add Product</Link>
                <Link onClick={handleLink} to="/dashboard/showproduct" className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">Show Product</Link>
                <Link onClick={handleLink} to="/dashboard/manageadmin" className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">Manage Admin</Link>
                <Link onClick={handleLink} to="/dashboard/addemployee" className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">Add Employee</Link>
                <Link onClick={handleLink} to="/dashboard/viewemployee" className="btn hover:text-white bg-green-300 text-[#224229] w-3/5 my-2">View Employee</Link>
            </ul>
        </div>
    );
};

export default Categories;