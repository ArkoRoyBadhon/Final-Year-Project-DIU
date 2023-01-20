import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const AddEmployee = () => {
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

                    // fetch(`http://localhost:5005/addItem`, {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //         // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify(itemInfo)
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         navigate('/')
                    //     })
                    // toast.success('Successfully item added')
                    // // toast.success('Item added Successfully!')
                    // navigate('/')
                }
            })
            .catch(err => toast.error(err.message))

    }



    return (
        <div className='h-auto'>
            <div className="px-10 rounded-2xl pb-10 max-w-screen-md mx-auto  py-10">
                <h2 className='font-bold text-2xl text-red-600 pb-5'>Add New Employee</h2>
                <form onSubmit={handleSubmit(handleAddProductForm)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Employee Name</span>
                        </label>
                        <input {...register("employeeName", { required: 'Product Name field is required' })} type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input {...register("photo", { required: 'Product Photo field is required' })} type="file" className="file-input w-full max-w-xs" />
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
                        <select {...register("category", { required: 'Category field is required' })} className="select select-bordered w-full max-w-xs">
                            <option defaultValue>Shop-Keeper</option>
                            <option>Visitor</option>
                            
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: 'Company field is required' })} type="text" placeholder="company name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input {...register("phone", { required: 'Description field is required' })} type="text" placeholder="phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: 'Original Price field is required' })} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Our Price</span>
                        </label>
                        <input {...register("our_price", { required: 'This field is required' })} type="text" placeholder="our price" className="input input-bordered" />
                    </div> */}

                    <input className='btn btn-accent w-full mt-4' value="Add Employee" type="submit" />
                </form>
            </div>

        </div>
    );
};



export default AddEmployee;