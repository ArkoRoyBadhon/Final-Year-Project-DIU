import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import userAvatar from '../../assets/image/user-avatar.png';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader'

const ManageAdmin = () => {

    const [allUsers, setAllUsers] = useState(null)
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const [reFetch, setReFetch] = useState(false);
    const navigate = useNavigate()
    // useEffect(() => {
    //     fetch(`http://localhost:5005/userinfo/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data[0].role !== 'admin') {
    //                 return navigate('/dashboard/myprofile')
    //             }
    //             // setUserInfo(data[0])
    //         })
    //         .catch(err => console.log(err.message))
    // }, [user])
    // console.log(userInfo);

    useEffect(() => {
        fetch("http://localhost:5005/users")
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [reFetch])

    const manageAdmin = (id, action) => {
        // console.log(id, action)
        const data = { id, action }
        fetch("http://localhost:5005/manageadmin", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Done!')
                }
                setReFetch(!reFetch)
            })
    }


    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10  pt-10">
                <h2 className='font-bold text-2xl text-slate-800'>All Users List(Manage Admin): <span className='ml-1 text-red-600'> {allUsers && `${allUsers.length}`}</span> </h2>
                {
                    allUsers === null && <Loader />
                }
                {
                    allUsers && <>
                        {
                            allUsers.length === 0 ? <h2 className='font-bold text-lg text-red-600'>No users found.</h2>
                                :
                                <div className="overflow-auto">
                                    <table className='table w-full  mt-6'>
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
                                                            {
                                                                eachUser.photoURL ? <img className='rounded-full w-14 h-14' src={eachUser?.photoURL} alt="no img" /> : <img className='rounded-full w-14 h-14' src={userAvatar} alt="no img" />
                                                            }
                                                        </td>
                                                        <td>{eachUser.name}</td>
                                                        <td>{eachUser.email}</td>
                                                        {
                                                            eachUser.role == 'admin' && <td className='text-rose-500 font-semibold'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'sellerUser' && <td className='text-green-500 font-semibold'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'normalUser' && <td className='text-slate-700 font-semibold'>{eachUser.role}</td>
                                                        }
                                                        {
                                                            eachUser.role == 'superUser' && <td className='text-red-700 font-semibold'>{eachUser.role}</td>
                                                        }
                                                        <td>
                                                            {
                                                                eachUser.role === 'superUser' ? <h2>No action</h2> :
                                                                    <>
                                                                        {
                                                                            eachUser.email === user?.email ?
                                                                                <h2>Own account</h2>
                                                                                :
                                                                                <>
                                                                                    {
                                                                                        user?.email !== eachUser.email && eachUser.role === "admin" &&
                                                                                        <button onClick={() => manageAdmin(eachUser._id, 'remove')} className="btn btn-error btn-sm p-1 m-0 text-[#224229] ">Remove Admin</button>
                                                                                    }
                                                                                    {
                                                                                        user?.email !== eachUser.email && eachUser.role !== 'admin' && <button onClick={() => manageAdmin(eachUser._id, 'add')} className="btn btn-primary btn-sm p-2 m-0 text-white ">Make Admin</button>}
                                                                                </>
                                                                        }
                                                                    </>
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

export default ManageAdmin;