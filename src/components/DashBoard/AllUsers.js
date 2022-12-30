import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const AllBuyers = () => {
    const {user} = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setFetchUsers(data))
            .catch(err => console.error(err))
    }, [])

    const handleDeleteBuyer = async (id, email) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('user deleted')
                // toast.success('User Deleted Successfully!')
                // refetch()
                if(data){
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

    console.log("aa");
    return (
        <div className='min-h-screen'>
            <div className="bg-base-200 px-10 rounded-2xl pb-10 max-w-screen-xl mx-auto min-h-screen py-10">
                <h2 className='font-bold text-2xl text-red-600 pb-5'>All User List</h2>
                <table className='table-sm md:table w-3/5 mx-auto mt-12'>
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
                            fetchUsers?.map(eachUser =>
                                <tr key={eachUser._id}>
                                    <td>{eachUser.name}</td>
                                    <td>{eachUser.email}</td>
                                    <td>{eachUser.role}</td>
                                    <td>

                                        {
                                            eachUser.role === "admin" ?
                                                <button onClick={() =>alert('Admin cannot be deleted')} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</button>
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

export default AllBuyers;