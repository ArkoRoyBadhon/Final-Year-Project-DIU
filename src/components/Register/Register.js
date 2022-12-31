import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const { signUpWithEmail, updateUser, user, logOut, UserVerifyFunction } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUpForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const password = form.password.value;

        const saveinfo = {
            name,
            phone,
            email,
            address,
            password,
            role:"normalUser"
        }

        // console.log(saveinfo);

        signUpWithEmail(email, password)
            .then(res => {
                const user = res.user
                toast.success('SignUp Successfully!')
                const info = {
                    displayName: name,
                    phoneNumber: phone,
                    address: address
                }
                updateUser(info)
                    .then(result => {
                        // console.log(result);
                        saveUser(saveinfo)
                        // alert('user saved')
                    })
                    .catch(err => toast.error(err.message))

                form.reset()

                UserVerifyFunction()
                .then(()=> {
                    alert('an email verification mail sent to your email')
                })
                .catch(error => alert('something wrong'))
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(err => toast.error(err.message))
                // navigate('/login')
            })
            .catch(err => {
                toast.error(err.message);
            })
    }


    const saveUser = (saveinfo) => {
        console.log('inside saaveUser', saveinfo);
        fetch(`http://localhost:5000/userinfo/`, {
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
        <div style={{backgroundImage: 
            "url(/images/gom.jpg)"}} className="hero min-h-screen bg-base-200">
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
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea type="email" name='address' placeholder="Enter your Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account? LogIn</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">register</button>
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