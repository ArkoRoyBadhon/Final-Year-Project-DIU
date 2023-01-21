import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const { signUpWithEmail, updateUser, user, logOut, UserVerifyFunction } = useContext(AuthContext)
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const handleSignUpForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const password = form.password.value;
        const role = form.userType.value;
        const photo = form.photo.files[0];
        const saveinfo = {
            name,
            phone,
            email,
            address,
            password,
            role: role,
        }

        // console.log(saveinfo);

        signUpWithEmail(email, password)
            .then(res => {
                const user = res.user
                toast.success('SignUp Successfully!')
                const formData = new FormData();
                formData.append('image', photo);
                const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        // console.log(imgData);
                        const photoURL = imgData?.data?.url

                        const info = {
                            displayName: name,
                            phoneNumber: phone,
                            address: address,
                            photoURL: photoURL
                        }
                        // console.log(info, user)
                        updateUser(info)
                            .then(result => {
                                // console.log('result', result)
                                const newSaveInfo = { ...saveinfo, photoURL }
                                // console.log(newSaveInfo);
                                saveUser(newSaveInfo)
                            })
                            .catch(err => toast.error(err.message))
                        form.reset()

                        UserVerifyFunction()
                            .then(() => {
                                toast('An email verification mail sent to your email')
                            })
                            .catch(error => alert('something wrong'))
                        logOut()
                            .then(() => {
                                navigate('/login')
                            })
                            .catch(err => toast.error(err.message))
                    })



            })
            .catch(err => {
                toast.error(err.message);
            })
    }


    const saveUser = (saveinfo) => {
        console.log('inside saaveUser', saveinfo);
        fetch(`http://localhost:5005/userinfo/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveinfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // setCreatedUserEmail(saveinfo.email);
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div style={{
            backgroundImage:
                "url(/images/gom.jpg)"
        }} className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                {/* <div className="text-center lg:text-left">
                    
                </div> */}
                <div className="w-[25rem] rounded-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUpForm} className="card-body">
                        <h2 className="text-2xl">Please Register</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input required type="text" name='phone' placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea required type="email" name='address' placeholder="Enter your Address" className="input input-bordered" />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">User Type</span>
                            </label>
                            <select className="select select-bordered font-normal" name='userType' required>
                                <option disabled selected>Select user type?</option>
                                <option value="normalUser">Buyer</option>
                                <option value="sellerUser">Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select your photo</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " required name='photo' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover underline">Already have an account? LogIn</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#224229] border-0">register</button>
                        </div>
                    </form>
                    {
                        user?.id && <div>{user.displayName}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;