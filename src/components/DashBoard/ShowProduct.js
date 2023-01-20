import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const ShowProduct = () => {
    const [allitems, setAllItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5005/allitems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10 max-w-screen-xl mx-auto  pt-10">
                <h2 className='font-bold text-2xl text-red-600'>All Items List</h2>
                <table className='table-sm md:table w-3/5 mx-auto mt-6'>
                    <thead>
                        <tr>
                            <td>Index</td>
                            <td>Photo</td>
                            <th>Name</th>
                            {/* <th>Email</th>
                            <th>Role</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allitems?.map((item,index) =>
                                <tr key={item._id}>
                                    <td>{index+1}</td>
                                    <td>
                                        <img className='rounded-lg' src={item.photo} alt="" />
                                    </td>
                                    <td>{item.name}</td>
                                    {/* <td>{item.email}</td>
                                    <td>{item.role}</td> */}
                                    <td>

                                        {
                                            // item.role === "admin" 
                                            <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
                                            // :
                                            // <button onClick={() => handleDeleteBuyer(eachUser._id, eachUser.email)} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-primary btn-sm p-0 m-0 md:btn-md">Edit</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowProduct;