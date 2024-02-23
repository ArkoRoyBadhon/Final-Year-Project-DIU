import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const ShowProduct = () => {

    // console.log('showProduct');
    const [allitems, setAllItems] = useState(null)
    const { user, logOut } = useContext(AuthContext);
    const inputCategory = useRef()
    const inputType = useRef()
    const [searchCategory, setSearchCategory] = useState('Medicine')
    const [type, setType] = useState('Own')

    useEffect(() => {
        fetch(`https://cropdoctor-server.vercel.app/allitems?email=${user?.email}&category=${searchCategory}&type=${type}`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [user, searchCategory, type])

    const searchHandle = () => {
        let category = inputCategory.current.value;
        let nowType = inputType.current.value;
        setAllItems(null)
        setSearchCategory(category);
        setType(nowType);
    }


    return (
        <div>
            <div className=" px-10 rounded-2xl pb-10  pt-10 ">
                <div className='flex flex-col items-center md:justify-start  md:flex-row gap-6 rounded-xl w-full p-2 md:p-10 bg-slate-800'>
                    <select className="select select-bordered w-full md:w-[40%] font-normal" name='category' ref={inputCategory}>
                        <option defaultValue='Medicine'>Medicine</option>
                        <option defaultValue='Machinaries'>Machinaries</option>
                    </select>
                    <select className="select select-bordered w-full md:w-[40%] font-normal" name='category' ref={inputType}>
                        <option defaultValue='Own'>Own</option>
                        <option defaultValue='Others'>Others</option>
                        <option defaultValue='All'>All</option>
                    </select>
                    <button className='btn bg-primary border-0 w-fit' onClick={() => searchHandle()}>Search</button>
                </div>
                <h2 className='font-bold text-2xl text-slate-800 mt-8'>All Items List: <span className='ml-1 text-red-600'> {allitems && `${allitems.length}`}</span></h2>
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
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Seller Email</th>
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
                                                        <td>{item.category}</td>
                                                        <td>{item.price}Tk</td>
                                                        <td>{item.authorEmail}</td>
                                                        <td className=''>
                                                            <Link to={`viewproduct/${item.productId}`} className="btn btn-accent btn-sm  m-0 ">View</Link>
                                                            <button onClick={() => toast.error('Admin cannot be deleted')} className="btn btn-error btn-sm ml-2 ">Delete</button>

                                                            {
                                                                user?.email === item.authorEmail ?
                                                                    <Link to={`editproduct/${item.productId}`} className="btn btn-primary btn-sm  m-0  ml-2">Edit</Link> :
                                                                    <button  className="btn btn-primary btn-sm  m-0  ml-2" disabled>Edit</button>
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

export default ShowProduct;