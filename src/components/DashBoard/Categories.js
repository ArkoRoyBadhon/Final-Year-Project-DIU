import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='max-w-screen-lg py-10'>
            <h4 className="text-xl font-bold">Links</h4>

            <ul className="py-10">
                <Link className="btn w-3/5 my-2">All Users</Link>
                <Link className="btn w-3/5 my-2">Add Product</Link>
                <Link className="btn w-3/5 my-2"></Link>
            </ul>
        </div>
    );
};

export default Categories;