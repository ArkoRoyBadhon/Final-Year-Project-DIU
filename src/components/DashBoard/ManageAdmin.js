import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageAdmin = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5005/users")
            .then(res => res.json())
            .then(data => setAllUsers(data))
        // .catch(err => toast.error(err))
    }, [])

    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10 max-w-screen-xl mx-auto  pt-10">
                <h2 className='font-bold text-2xl text-slate-800'>All Users List(Manage Admin)</h2>
                <div className="overflow-auto">
                    <table className='table mx-auto mt-6'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map((eachUser, count) =>
                                    <tr key={eachUser._id}>
                                        <td>{count + 1}</td>
                                        <td>
                                            <img className='avatar w-14 h-14  rounded-full' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                                        </td>
                                        <td>{eachUser.name}</td>
                                        <td>{eachUser.email}</td>
                                        {
                                            eachUser.role === 'admin' ? <td className='text-green-600'>{eachUser.role}</td> : <td>{eachUser.role}</td>
                                        }
                                        <td>

                                            {
                                                eachUser.role === "admin" ?
                                                    <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-success btn-sm p-1 m-0 text-[#224229] ">Remove Admin</button>
                                                    :
                                                    <button className="btn btn-primary btn-sm p-2 m-0 text-white ">Make Admin</button>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;