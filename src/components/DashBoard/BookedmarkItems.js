import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';

const BookedmarkItems = () => {
    const { user } = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState(null);
    const [reFetch, setReFetch] = useState(false);
    let count = 1;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5005/mybookedmark?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFetchUsers(data);
            })
            .catch(err => toast.error(err))
    }, [reFetch])

    const handleBookedMark = (productId) => {
        const insertData = {
            productId: productId,
            email: user?.email
        }
        fetch('http://localhost:5005/managebookedmarkitems', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(insertData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 'add') {
                    toast.success(data.status)
                }
                else if (data.code === 'remove') {
                    toast.error(data.status)
                }
                else {
                    toast.error('Something wrong!')
                }
                setReFetch(!reFetch)
            })
    }

    return (
        <div className=''>
            <div className=" px-10 rounded-2xl  mx-auto  pt-10 ">
                <h2 className='font-bold text-2xl text-slate-800'>Your BookedMark Items</h2>
                {
                    fetchUsers ? <>
                        {
                            fetchUsers.length === 0 ? <h2 className='font-bold text-lg mt-4 text-rose-500'>No products.</h2>
                                :
                                <div className="overflow-auto rounded-lg">
                                    <table className=' md:table  mx-auto mt-6  w-full'>
                                        <thead className=''>
                                            <tr>
                                                <th className=''></th>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                fetchUsers?.map(eachUser =>
                                                    <tr key={eachUser._id}>
                                                        <td className='sticky l-0'>{count++}</td>
                                                        <td>
                                                            <img className='rounded-full w-14 h-14' src={eachUser?.photo} alt="no img" />
                                                        </td>
                                                        <td>{eachUser.name}</td>
                                                        <td>{eachUser.price}Tk</td>
                                                        <td>
                                                            <Link to={`viewproduct/${eachUser.productId}`} className="btn btn-primary mr-1 btn-sm p-2 m-0 ">View</Link>
                                                            <button onClick={() => handleBookedMark(eachUser?.productId)} className="btn btn-error btn-sm p-2 m-0 ">Remove</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </> :
                        <Loader></Loader>
                }
            </div>
        </div>
    );
};

export default BookedmarkItems;