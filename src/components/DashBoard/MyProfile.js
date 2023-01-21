import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';
import userAvatar from '../../assets/image/user-avatar.png' 
const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5005/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data[0])
            })
            .catch(err => console.log(err.message))
    }, [user])
 
    return (
        <div className='h-auto'>
            <div className='px-10 rounded-2xl pb-10  py-10 max-w-screen-md mx-auto  '>

                {
                    user && userInfo ? <div className='flex flex-col gap-4 items-center bg-green-300  rounded-xl pb-8'>
                        <h2 className='font-bold text-2xl bg-slate-800 text-white w-full pb-5 text-center rounded-t-xl flex items-center justify-center p-4'>My Profile</h2>
                        <div className="avatar">
                            <div className="w-28 rounded-full">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} /> : <img src={userAvatar} alt="" />
                                }

                            </div>
                        </div>
                        <div className='flex flex-col gap- text-lg'>
                            <p className='font-bold'>Display Name: <span className=' ml-1 font-normal'>{user?.displayName}</span></p>
                            <p className='font-bold'>Email: <span className=' ml-1 font-normal'>{user?.email}</span></p>
                            <p className='font-bold'>Phone number: <span className=' ml-1 font-normal'>{userInfo?.phone}</span></p>
                            <p className='font-bold'>Address: <span className=' ml-1 font-normal'>{userInfo?.address}</span></p>
                            <p className='font-bold'>Role: <span className=' ml-1 font-normal text-rose-500'>{userInfo?.role}</span></p>

                        </div>
                    </div> : <Loader></Loader>
                }

            </div>
        </div>
    );
};

export default MyProfile;