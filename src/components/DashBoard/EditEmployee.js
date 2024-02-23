import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const EditEmployee = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [loading, setLoading] = useState(false);
    const [preData, setPreData] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {

        const url = window.location.href;
        const id = url.split('dashboard')[1].split('/')[2]

        fetch(`https://cropdoctor-server.vercel.app/getemployee/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPreData(data);
            })
    }, [user])



    const handleEditForm = (data) => {

        setLoading(true)

        const employeeInfo = {
            name: data.employeeName,
            photo: preData.photo,
            location: data.location,
            position: data.position,
            email: data.email,
            phone: data.phone,

        }
        console.log(employeeInfo);

        fetch(`https://cropdoctor-server.vercel.app/editemployee/${preData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(employeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Edit!')
                    setLoading(false)
                    navigate('/dashboard/viewemployee')
                }
                else {
                    toast.error('Something Wrong!')
                }
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className='h-auto'>
            <div className="px-10 rounded-2xl pb-10 max-w-screen-md mx-auto   py-10">
                <h2 className='font-bold text-2xl text-slate-800 pb-5'>Edit Employee</h2>
                {
                    preData === null && <Loader />
                }
                {
                    preData && <form onSubmit={handleSubmit(handleEditForm)} className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Employee Name</span>
                            </label>
                            <input defaultValue={preData.name} {...register("employeeName", { required: 'Employee Name field is required' })} type="text" placeholder="Name" className="input input-bordered  max-w-[900px]" />
                            {
                                errors.employeeName && <label className='text-rose-500 mt-2'>{`${errors?.employeeName?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Previous Photo</span>
                            </label>
                            <img src={preData.photo} alt="" className='w-[40%]' />
                            {/* <input {...register("photo", { required: 'Employee Photo field is required' })} type="file" className="file-input w-full border-success  file-input-success  max-w-[900px]" /> */}
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
                            <select defaultValue={preData.position}  {...register("position", { required: 'Position field is required' })} className="select select-bordered w-full font-normal  max-w-[900px] " required>
                                <option defaultValue='Shop keeper'>Shop Keeper</option>
                                <option defaultValue='Visitor'>Visitor</option>
                                <option defaultValue='Manager'>Managaer</option>
                                <option defaultValue='Employee'>Employee</option>
                            </select>
                            {
                                errors.position && <label className='text-rose-500 mt-2'>{`${errors?.position?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input defaultValue={preData.location} {...register("location", { required: 'Location field is required' })} type="text" placeholder="location name" className="input input-bordered  max-w-[900px]" />
                            {
                                errors.location && <label className='text-rose-500 mt-2'>{`${errors?.location?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input defaultValue={preData.phone} {...register("phone", { required: 'Phone field is required' })} type="text" placeholder="phone" className="input input-bordered  max-w-[900px]" />
                            {
                                errors.phone && <label className='text-rose-500 mt-2'>{`${errors?.phone?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={preData.email} {...register("email", { required: 'Email field is required' })} type="text" placeholder="email" className="input input-bordered  max-w-[900px]" />
                            {
                                errors.email && <label className='text-rose-500 mt-2'>{`${errors?.email?.message}*`}</label>
                            }
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
                }
            </div>

        </div>
    );
};



export default EditEmployee;