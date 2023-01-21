import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const ShowProduct = () => {
    
    console.log('showProduct');
    const [allitems, setAllItems] = useState(null)
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5005/allitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [user])

    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10  pt-10">
                <h2 className='font-bold text-2xl text-slate-800'>All Items List</h2>
                {
                    allitems === null && <Loader></Loader>
                }
                {
                    allitems && <>
                        {
                            allitems.length === 0 ? <h2 className='text-lg font-bold text-rose-500'>No Data.</h2>
                                :
                                <div className="overflow-auto">
                                    <table className='table w-full mt-6'>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allitems?.map((item, index) =>
                                                    <tr key={item._id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img className='rounded-lg h-20 w-20' src={item.photo} alt="" />
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td>{item.price}Tk</td>
                                                        <td className=''>

                                                            <Link to={`viewproduct/${item.productId}`} className="btn btn-accent btn-sm  m-0 ">View</Link>
                                                            <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm ml-2 ">Delete</button>

                                                            <Link to={`editproduct/${item.productId}`} className="btn btn-primary btn-sm  m-0  ml-2">Edit</Link>
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

export default ShowProduct;