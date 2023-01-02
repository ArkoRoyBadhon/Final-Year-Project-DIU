import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MakeAdmin = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setAllUsers(data))
            // .catch(err => toast.error(err))
    }, [])

    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10 max-w-screen-xl mx-auto  pt-10">
                <h2 className='font-bold text-2xl text-red-600'>All Users List</h2>
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
                        {
                            allUsers?.map(eachUser =>
                                <tr key={eachUser._id}>
                                    <td>{eachUser.name}</td>
                                    <td>{eachUser.email}</td>
                                    <td>{eachUser.role}</td>
                                    <td>

                                        {
                                            eachUser.role === "admin" ?
                                                <button onClick={() =>toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Make Admin</button>
                                                :
                                                <button className="btn btn-error btn-sm p-0 m-0 md:btn-md">Make Admin</button>
                                        }
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

export default MakeAdmin;