import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key

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
                        category: data.category
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
                            navigate('/')
                        })
                    toast.success('Successfully item added')
                    // toast.success('Item added Successfully!')
                    navigate('/')
                }
            })
            .catch(err => toast.error(err.message))

    }



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
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Photo</span>
                        </label>
                        <input {...register("photo", { required: 'Product Photo field is required' })} type="file" className="file-input border-success  file-input-success max-w-[900px]" />
                    </div>
                    
                   
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select {...register("location", { required: 'Location field is required' })} className="select select-bordered max-w-[900px]">
                            <option defaultValue>All Shops</option>
                            
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register("category", { required: 'Category field is required' })} className="select select-bordered max-w-[900px]">
                            <option defaultValue>Medicine</option>
                            <option>Machinaries</option>
                            
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input {...register("product_company", { required: 'Company field is required' })} type="text" placeholder="company name" className="input input-bordered max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Disease</span>
                        </label>
                        <input {...register("disease", { required: 'Disease field is required' })} type="text" placeholder="disease name" className="input input-bordered max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", { required: 'Description field is required' })}  placeholder="description" className="input input-bordered max-w-[900px] min-h-[100px] py-2" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Market Price</span>
                        </label>
                        <input {...register("original_price", { required: 'Original Price field is required' })} type="text" placeholder="original price" className="input input-bordered max-w-[900px]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Our Price</span>
                        </label>
                        <input {...register("our_price", { required: 'This field is required' })} type="text" placeholder="our price" className="input input-bordered max-w-[900px]" />
                    </div>

                    <input className='btn bg-[#224229] w-full  max-w-[900px] mt-4' value="Add Item" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;