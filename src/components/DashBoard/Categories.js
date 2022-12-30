import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({handleLink}) => {

    const handleAdmin = () => {
        alert("Comming Soon.....")
    }

    return (
        <div className='max-w-screen-lg py-10 max-h-fit'>
            <h4 className="text-xl font-bold">Links</h4>

            <ul className="py-10">
                <Link onClick={handleLink} to='/dashboard' className="btn w-3/5 my-2">All Users</Link>
                <Link onClick={handleLink} to="/dashboard/addProduct" className="btn w-3/5 my-2">Add Product</Link>
                <Link onClick={handleAdmin} className="btn w-3/5 my-2">Make Admin</Link>
            </ul>
        </div>
    );
};

export default Categories;