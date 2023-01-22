import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const EditProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()

    const location = useLocation()
    const id = location.pathname.split('/')[3]
    const [productData, setProductData] = useState(null)
    const [reFetch, setRefetch] = useState(false)

    useEffect(() => {
        const id = location.pathname.split('/')[3]
        if (user) {
            fetch(`http://localhost:5005/editproduct/${id}?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.code === true) {
                        // console.log(data)
                        setProductData(data.result)
                    }
                    // if (data.code == 'No') {
                    //     navigate('/dashboard/showproduct')
                    // }
                    // else {
                    //     setProductData(data)
                    // }
                })
        }
    }, [id, reFetch, user])

    const handleAddProductForm = (data) => {

        // const image = data.photo[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {
        // let date = new Date().toLocaleDateString();
        // console.log(date);

        const itemInfo = {
            name: data.productName,
            photo: productData?.photo,
            originalPrice: data.original_price,
            price: data.our_price,
            description: data.description,
            company: data.product_company,
            location: data.location,
            category: data.category,
            productId: productData.productId,
            authorName: productData.authorName,
            authorEmail: user?.email
        }

        fetch(`http://localhost:5005/editproduct`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(itemInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Edit!')
                setRefetch(!reFetch)
                setProductData(null)
                navigate('/dashboard/showproduct')
            })
        // .catch(err => toast.error(err.message))
    }

    return (
        <div className='h-auto'>
            <div className="px-10 rounded-2xl pb-10  py-10 max-w-screen-md mx-auto  ">
                <h2 className='font-bold text-2xl text-slate-800 pb-5'>Edit Product</h2>
                {
                    productData === null && <Loader></Loader>
                }
                {
                    productData ? <form onSubmit={handleSubmit(handleAddProductForm)} className=" flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("productName", { required: 'Product Name field is required' })} type="text" placeholder="Name" className="input input-bordered max-w-[900px]" defaultValue={productData.name} />
                            {
                                errors.productName && <label className='text-rose-500 mt-2'>{`${errors?.productName?.message}*`}</label>
                            }
                        </div>
                        <div className='form-control'>
                            <h2 className='text-rose-500'>Previous image</h2> <img src={productData.photo} alt="" className='w-20 h-20' />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo</span>
                            </label>

                            <input {...register("photo", { required: 'Product Photo field is required' })} type="file" className="file-input border-success  file-input-success max-w-[900px]" />
                            {
                                errors.photo && <label className='text-rose-500 mt-2'>{`${errors?.photo?.message}*`}</label>
                            }
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <select {...register("location", { required: 'Location field is required' })} className="select select-bordered max-w-[900px] font-normal" required defaultValue={productData.location} >
                                <option defaultValue='All Shops'>All Shops</option>
                            </select>
                            {
                                errors.location && <label className='text-rose-500 mt-2'>{`${errors?.location?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category", { required: 'Category field is required' })} className="select select-bordered max-w-[900px] font-normal" defaultValue={productData.category}>
                                <option defaultValue='Medicine'>Medicine</option>
                                <option defaultValue='Machinaries'>Machinaries</option>
                                {
                                    errors.category && <label className='text-rose-500 mt-2'>{`${errors?.category?.message}*`}</label>
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input {...register("product_company", { required: 'Company field is required' })} type="text" placeholder="company name" className="input input-bordered max-w-[900px]" defaultValue={productData.company} />
                            {
                                errors.product_company && <label className='text-rose-500 mt-2'>{`${errors?.product_company?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Disease</span>
                            </label>
                            <input {...register("disease", { required: 'Disease field is required' })} type="text" placeholder="disease name" className="input input-bordered max-w-[900px]" defaultValue={productData.disease} />

                            {
                                errors.disease && <label className='text-rose-500 mt-2'>{`${errors?.disease?.message}*`}</label>
                            }

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("description", { required: 'Description field is required' })} placeholder="description" className="input input-bordered max-w-[900px] min-h-[100px] py-2" defaultValue={productData.description} />
                            {
                                errors.description && <label className='text-rose-500 mt-2'>{`${errors?.description?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Market Price</span>
                            </label>
                            <input {...register("original_price", { required: 'Original Price field is required' })} type="text" placeholder="original price" className="input input-bordered max-w-[900px]" defaultValue={productData.originalPrice} />
                            {
                                errors.original_price && <label className='text-rose-500 mt-2'>{`${errors?.original_price?.message}*`}</label>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Our Price</span>
                            </label>
                            <input {...register("our_price", { required: 'This field is required' })} type="text" placeholder="our price" className="input input-bordered max-w-[900px]" defaultValue={productData.price} />
                            {
                                errors.our_price && <label className='text-rose-500 mt-2'>{`${errors?.our_price?.message}*`}</label>
                            }
                        </div>

                        <input className='btn bg-[#224229] w-full  max-w-[900px] mt-4' value="Add Item" type="submit" />
                    </form> : <h2 className='text-lg font-bold text-rose-500'>No data.</h2>
                }
            </div>

        </div>
    );
};

export default EditProduct;