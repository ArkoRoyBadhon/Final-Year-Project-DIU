import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState([]);
    let count = 1;

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5005/users")
            .then(res => res.json())
            .then(data => setFetchUsers(data))
            .catch(err => toast.error(err))
    }, [])

    const handleDeleteBuyer = async (id, email) => {
        fetch(`http://localhost:5005/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('user deleted')
                // toast.success('User Deleted Successfully!')
                // refetch()
                if (data) {
                    window.location.reload();
                }
            })

        // deleteUserFromFirebase(email)
        //     .then(() => alert('user delete from firebase'))

    }


    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // useEffect(() => {
    //     navigate('/dashboard')
    // }, [fetchUsers])

    // console.log("aa");
    return (
        <div className=''>
            <div className=" px-10 rounded-2xl pb-10 max-w-screen-xl mx-auto  pt-10">
                <h2 className='font-bold text-2xl text-red-600'>All User List</h2>
                <table className='table-sm md:table w-3/5 mx-auto mt-6'>
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
                        {
                            fetchUsers?.map(eachUser =>
                                <tr key={eachUser._id}>
                                    <td>{count++}</td>
                                    <td>
                                        <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                                    </td>
                                    <td>{eachUser.name}</td>
                                    <td>{eachUser.email}</td>
                                    <td>{eachUser.role}</td>
                                    <td>

                                        {
                                            eachUser.role === "admin" ?
                                                <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
                                                :
                                                <button onClick={() => handleDeleteBuyer(eachUser._id, eachUser.email)} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
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

export default AllUsers;