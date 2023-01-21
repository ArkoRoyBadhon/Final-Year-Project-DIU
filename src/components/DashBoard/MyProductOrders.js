import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';

const MyProductOrders = () => {

    const { user } = useContext(AuthContext)
    const [fetchUsers, setFetchUsers] = useState(null);
    let count = 1;

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5005/allorders?email=${user?.email}`)
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
    console.log(fetchUsers)
    return (
        <div className=''>
            <div className=" px-10 rounded-2xl   pt-10 ">
                <h2 className='font-bold text-2xl text-slate-800'>All Orders List</h2>
                {
                    fetchUsers === null && <Loader />
                }
                {
                    fetchUsers && <>
                        {
                            fetchUsers.length == 0 ? <h2 className='text-lg font-bold text-red-500 mt-10'>No Order.</h2>
                                :
                                <div className="overflow-auto rounded-lg">
                                    <table className=' md:table  mx-auto mt-6  w-full'>
                                        <thead className=''>
                                            <tr>
                                                <th className=''></th>
                                                <th className=''>Photo</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Total Price</th>
                                                <th>Seller Email</th>
                                                <th>Buyer Email</th>
                                                <th>Payment</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                fetchUsers?.map(eachUser =>
                                                    <tr key={eachUser._id}>
                                                        <td className='sticky l-0'>{count++}</td>
                                                        <td>
                                                            <img className='rounded-xl w-44 h-24' src={eachUser.productInfo.photo} />
                                                        </td>
                                                        <td>{eachUser.productInfo.name}</td>
                                                        <td>{eachUser?.orderInfo?.quantity}</td>
                                                        <td>{eachUser?.orderInfo?.price}Tk</td>
                                                        <td>{eachUser?.orderInfo?.tPrice}Tk</td>
                                                        <td className=''>{eachUser.productInfo.authorEmail}</td>
                                                        <td className=''>{eachUser.orderInfo.orderPersonEmail}</td>
                                                        <td>{eachUser?.orderInfo?.payment ? <span className='text-green-500'>Paid</span> : <span className='text-red-500'>Not paid</span>}</td>
                                                        <td>
                                                            <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm p-2 m-0 ">Cancel</button>
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

export default MyProductOrders;