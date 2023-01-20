import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const { user: CurrentUser, LogIn, passwordReseting } = useContext(AuthContext);
    const [forgotEmail, setForgotEmail] = useState('');

    const navigate = useNavigate()


    const handleLoginForm = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setForgotEmail(email)

        const info = {
            email,
            password
        }
        // console.log(info);

        LogIn(email, password)
            .then(result => {
                const user = result.user
                toast.success('Login Successfully!')

                navigate('/');

            })
            // .catch(err => alert('Login Failed! Please try again or reset your password'))
            .catch(err => toast.error(err.message))
    }

    const handleResetPassword = () => {
        if (forgotEmail) {
            passwordReseting(forgotEmail)
            .then(()=> {
                toast.error('password reset link send to your mail')
            })
            .catch(err => toast.error(err.message))
        } else {
            toast.error('Try to Login First')
        }
    }


    // console.log(forgotEmail);

    return (
        <div style={{backgroundImage: 
        "url(/images/gom.jpg)"}} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className="text-center lg:text-left">
                    
                </div> */}
                <div className="w-[25rem] rounded-lg flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <h2 className="text-2xl">Please Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary border-0  bg-[#224229]">Login</button>
                        </div>
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover underline">New to website? Please register!</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;