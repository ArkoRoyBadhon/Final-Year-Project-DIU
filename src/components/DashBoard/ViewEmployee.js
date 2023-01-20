import React from 'react';

const ViewEmployee = () => {
    let count = 1;
    return (
        <div>
            <div className=' px-10 rounded-2xl  mx-auto  pt-10'>
                <h3 className="  font-bold text-2xl text-slate-800">View Employee</h3>
                <table className='table-sm md:table  mx-auto mt-6 w-full'>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{count++}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-14 rounded-full ">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Akash</td>
                            <td>akash@gmail.com</td>
                            <td>Shop-Keeper</td>
                            <td className=''>
                                <button className='btn btn-error btn-sm'>Delete</button>
                                <button className='btn btn-sm btn-primary ml-2'>Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>{count++}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-14 rounded-full ">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>Rohomot Ali</td>
                            <td>rohomotali@gmail.com</td>
                            <td>Shop-Keeper</td>
                            <td>
                                <button className='btn btn-error btn-sm'>Delete</button>
                                <button className='btn btn-sm btn-primary ml-2'>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewEmployee;