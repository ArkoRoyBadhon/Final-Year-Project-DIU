import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const productId = 'I' + Math.random().toString().split('.')[1] + 'd'

    const navigate = useNavigate()

    const handleAddProductForm = (data) => {

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
                        name: data.productName,
                        photo: imgData.data.url,
                        originalPrice: data.original_price,
                        price: data.our_price,
                        description: data.description,
                        company: data.product_company,
                        location: data.location,
                        category: data.category,
                        productId: productId,
                        authorName: user?.displayName,
                        authorEmail: user?.email,
                        disease: data.disease
                    }
                    // console.log(itemInfo);

                    fetch(`http://localhost:5005/addItem`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(itemInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            navigate('/dashboard/showproduct')
                        })
                    toast.success('Successfully item added')
                    // toast.success('Item added Successfully!')
                    navigate('/dashboard/showproduct')
                }
            })
            .catch(err => toast.error(err.message))

    }

    console.log(errors)

    return (
        <div className='h-auto'>
            <div className="px-10 rounded-2xl pb-10  py-10 max-w-screen-md mx-auto  ">
                <h2 className='font-bold text-2xl text-slate-800 pb-5'>Add New Product</h2>
                <form onSubmit={handleSubmit(handleAddProductForm)} className=" flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("productName", { required: 'Product Name field is required' })} type="text" placeholder="Name" className="input input-bordered max-w-[900px]" />
                        {
                            errors.productName && <label className='text-rose-500 mt-2'>{`${errors?.productName?.message}*`}</label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Photo</span>
                        </label>
                        <input {...register("photo", { required: 'Product Photo field is required' })} type="file" className="file-input border-success  file-input-success max-w-[900px]" />
                        {
                            errors.photo && <label className='text-rose-500 mt-2'>{`${errors?.photo?.message}*`}</label>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select {...register("location", { required: 'Location field is required' })} className="select select-bordered max-w-[900px] font-normal" required >
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
                        <select {...register("category", { required: 'Category field is required' })} className="select select-bordered max-w-[900px] font-normal">
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
                        <input {...register("product_company", { required: 'Company field is required' })} type="text" placeholder="company name" className="input input-bordered max-w-[900px]" />
                        {
                            errors.product_company && <label className='text-rose-500 mt-2'>{`${errors?.product_company?.message}*`}</label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Disease</span>
                        </label>
                        <input {...register("disease", { required: 'Disease field is required' })} type="text" placeholder="disease name" className="input input-bordered max-w-[900px]" />

                        {
                            errors.disease && <label className='text-rose-500 mt-2'>{`${errors?.disease?.message}*`}</label>
                        }

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", { required: 'Description field is required' })} placeholder="description" className="input input-bordered max-w-[900px] min-h-[100px] py-2" />
                        {
                            errors.description && <label className='text-rose-500 mt-2'>{`${errors?.description?.message}*`}</label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Market Price</span>
                        </label>
                        <input {...register("original_price", { required: 'Original Price field is required' })} type="text" placeholder="original price" className="input input-bordered max-w-[900px]" />
                        {
                            errors.original_price && <label className='text-rose-500 mt-2'>{`${errors?.original_price?.message}*`}</label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Our Price</span>
                        </label>
                        <input {...register("our_price", { required: 'This field is required' })} type="text" placeholder="our price" className="input input-bordered max-w-[900px]" />
                        {
                            errors.our_price && <label className='text-rose-500 mt-2'>{`${errors?.our_price?.message}*`}</label>
                        }
                    </div>

                    <input className='btn bg-[#224229] w-full  max-w-[900px] mt-4' value="Add Item" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;