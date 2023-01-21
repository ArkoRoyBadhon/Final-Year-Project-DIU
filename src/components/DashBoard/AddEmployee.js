import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const AddEmployee = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleAddForm = (data) => {

        setLoading(true)
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // let date = new Date().toLocaleDateString();
                    // console.log(date);

                    const itemInfo = {
                        name: data.employeeName,
                        photo: imgData.data.url,
                        location: data.location,
                        position: data.position,
                        email: data.email,
                        phone: data.phone
                    }
                    console.log(itemInfo);

                    fetch(`http://localhost:5005/addemployee`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(itemInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            if (data.acknowledged) {
                                toast.success('Successfully added!')
                                navigate('/dashboard/viewemployee')
                            }
                            else {
                                toast.error('Something Wrong!')
                            }
                        })
                }
            })
            .catch(err => toast.error(err.message))

    }



    return (
        <div className='h-auto'>
            <div className="px-10 rounded-2xl pb-10 max-w-screen-md mx-auto  py-10">
                <h2 className='font-bold text-2xl text-slate-800 pb-5'>Add New Employee</h2>
                <form onSubmit={handleSubmit(handleAddForm)} className="flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Employee Name</span>
                        </label>
                        <input {...register("employeeName", { required: 'Employee Name field is required' })} type="text" placeholder="Name" className="input input-bordered  max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input {...register("photo", { required: 'Employee Photo field is required' })} type="file" className="file-input w-full border-success  file-input-success  max-w-[900px]" />
                    </div>

                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select {...register("location", { required: 'Location field is required' })} className="select select-bordered w-full max-w-xs">
                            <option defaultValue>All Shops</option>
                            
                        </select>
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Position</span>
                        </label>
                        <select {...register("position", { required: 'Position field is required' })} className="select select-bordered w-full font-normal  max-w-[900px] " required>
                            <option defaultValue='Shop keeper'>Shop Keeper</option>
                            <option defaultValue='Visitor'>Visitor</option>
                            <option defaultValue='Manager'>Managaer</option>
                            <option defaultValue='Employee'>Employee</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: 'Location field is required' })} type="text" placeholder="location name" className="input input-bordered  max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input {...register("phone", { required: 'Phone field is required' })} type="text" placeholder="phone" className="input input-bordered  max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: 'Email field is required' })} type="text" placeholder="email" className="input input-bordered  max-w-[900px]" />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Our Price</span>
                        </label>
                        <input {...register("our_price", { required: 'This field is required' })} type="text" placeholder="our price" className="input input-bordered" />
                    </div> */}

                    {
                        loading ? <>
                            <Loader />
                        </>
                            :
                            <input className='btn w-full mt-4 bg-[#224229]  max-w-[900px]' value="Add Employee" type="submit" />
                    }
                </form>
            </div>

        </div>
    );
};



export default AddEmployee;