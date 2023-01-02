import React from 'react';

const ViewEmployee = () => {
    let count = 1;
    return (
        <div>
            <h3 className="pl-10 mt-10 font-bold text-xl">Add Employee</h3>
            <table className='table-sm md:table w-3/5 mx-auto mt-6'>
                <thead>
                    <tr>
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
                            <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                        </td>
                        <td>Roky</td>
                        <td>roky@gmail.com</td>
                        <td>Visitor</td>
                        <td>
                            <button className='btn btn-error'>Delete</button>
                            {/* {
                                eachUser.role === "admin" ?
                                    <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
                                    :
                                    <button onClick={() => handleDeleteBuyer(eachUser._id, eachUser.email)} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
                            } */}
                        </td>
                    </tr>
                    <tr>
                        <td>{count++}</td>
                        <td>
                            <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                        </td>
                        <td>Saitama</td>
                        <td>saitama@gmail.com</td>
                        <td>Shop-Keeper</td>
                        <td>
                            <button className='btn btn-error'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{count++}</td>
                        <td>
                            <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                        </td>
                        <td>Akash</td>
                        <td>akash@gmail.com</td>
                        <td>Shop-Keeper</td>
                        <td>
                            <button className='btn btn-error'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{count++}</td>
                        <td>
                            <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                        </td>
                        <td>Rohomot Ali</td>
                        <td>rohomotali@gmail.com</td>
                        <td>Shop-Keeper</td>
                        <td>
                            <button className='btn btn-error'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewEmployee;