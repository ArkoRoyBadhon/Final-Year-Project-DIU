import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import userAvatar from '../../assets/image/user-avatar.png';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState([]);
    let count = 1;

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://cropdoctor-server.vercel.app/users")
            .then(res => res.json())
            .then(data => setFetchUsers(data))
            .catch(err => toast.error(err))
    }, [])

    // const handleDelete = async (id) => {
    //     fetch(`https://cropdoctor-server.vercel.app/deleteuser/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success('user deleted')

    //         })

    //     // deleteUserFromFirebase(email)
    //     //     .then(() => alert('user delete from firebase'))

    // }


    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // useEffect(() => {
    //     navigate('/dashboard')
    // }, [fetchUsers])

    // console.log("aa");
    // console.log(fetchUsers);
    return (
        <div className=''>
            <div className="px-1 md:px-10 rounded-2xl  mx-auto  pt-10 ">
                <h2 className='font-bold text-2xl text-slate-800'>All User List: <span className='ml-1 text-red-600'> {fetchUsers && `${fetchUsers.length}`}</span> </h2>
                {
                    fetchUsers === null && <Loader />
                }
                {
                    fetchUsers && <>
                        {
                            fetchUsers.length === 0 ? <h2 className='text-lg font-bold text-red-600'>No users found.</h2>
                                :
                                <div className="overflow-auto rounded-lg">
                                    <table className='table  mx-auto mt-6  w-full text-xs md:text-lg'>
                                        <thead className=''>
                                            <tr>
                                                <th className=''></th>
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
                                                        <td className='sticky l-0'>{count++}</td>
                                                        <td>
                                                            {
                                                                eachUser.photoURL ? <img className='rounded-full w-14 h-14' src={eachUser?.photoURL} alt="no img" /> : <img className='rounded-full w-14 h-14' src={userAvatar} alt="no img" />
                                                            }
                                                        </td>
                                                        <td>{eachUser.name}</td>
                                                        <td className=''>{eachUser.email}</td>
                                                        {
                                                            eachUser.role == 'admin' && <td className='text-rose-500'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'sellerUser' && <td className='text-green-500'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'normalUser' && <td className='text-slate-700'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'superUser' && <td className='text-slate-700'>{eachUser.role}</td>
                                                        }
                                                        <td>
                                                            {
                                                                eachUser.role !== 'superUser' && eachUser?.email === user?.email && <h2>Own account</h2>
                                                            }
                                                            {
                                                                eachUser.role === 'superUser' && <h2>Cannot delete superuser</h2>

                                                            }
                                                            {
                                                                eachUser.role !== 'superUser' && eachUser?.email !== user?.email && <button onClick={() => toast.success('No functionality done yet!')} className="btn btn-error btn-sm p-2 m-0 ">Delete</button>
                                                            }

                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default AllUsers;