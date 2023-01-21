import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';

const Categories = ({ handleLink }) => {

    const handleAdmin = () => {
        toast("Comming Soon.....")
    }
    const { user, logOut } = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState(null);
    const path = useLocation();
    const activeURL = path.pathname.split('/')[2];

    useEffect(() => {
        fetch(`http://localhost:5005/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data[0])
                // if (userInfo?.role === "admin") {
                //     setChecker(true);
                // }
            })
            .catch(err => toast.error(err.message))
    }, [user])

    const normalUserLi = <>
        {
            activeURL === 'myprofile' || activeURL === undefined ? <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">My Profile</Link> :
                <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">My Profile</Link>
        }
        {
            activeURL === 'bookedmarkitems' ? <Link onClick={handleLink} to="/dashboard/bookedmarkitems" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">BookedMark Items</Link> :
                <Link onClick={handleLink} to="/dashboard/bookedmarkitems" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">BookedMark Items</Link>
        }
        {
            activeURL === 'myorders' ? <Link onClick={handleLink} to="/dashboard/myorders" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">My Orders</Link> :
                <Link onClick={handleLink} to="/dashboard/myorders" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">My Orders</Link>
        }
    </>
    const sellerUserLi = <>
        {
            activeURL === 'myprofile' ? <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">My Profile</Link> :
                <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">My Profile</Link>
        }
        {
            activeURL === 'addproduct' ? <Link onClick={handleLink} to="/dashboard/addproduct" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Add Product</Link> :
                <Link onClick={handleLink} to="/dashboard/addproduct" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Add Product</Link>
        }
        {
            activeURL === 'showproduct' ? <Link onClick={handleLink} to="/dashboard/showproduct" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Show Product</Link> :
                <Link onClick={handleLink} to="/dashboard/showproduct" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Show Product</Link>
        }
        {
            activeURL === 'allorders' ? <Link onClick={handleLink} to="/dashboard/allorders" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">All Orders</Link> :
                <Link onClick={handleLink} to="/dashboard/allorders" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">All Orders</Link>
        }
    </>

    const adminLi = <>
        {
            activeURL === 'myprofile' ? <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">My Profile</Link> :
                <Link onClick={handleLink} to="/dashboard/myprofile" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">My Profile</Link>
        }
        {
            activeURL === 'allusers' ? <Link onClick={handleLink} to='/dashboard/allusers' className="btn hover:text-white  text-green-200 w-4/5 my-2 bg-[#224229]">All Users</Link> :
                <Link onClick={handleLink} to='/dashboard/allusers' className="btn hover:text-white  bg-green-200 w-4/5 my-2 text-[#224229]">All Users</Link>
        }
        {
            activeURL === 'manageadmin' ? <Link onClick={handleLink} to="/dashboard/manageadmin" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Manage Admin</Link> :
                <Link onClick={handleLink} to="/dashboard/manageadmin" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Manage Admin</Link>
        }
        {
            activeURL === 'addemployee' ? <Link onClick={handleLink} to="/dashboard/addemployee" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Add Employee</Link> :
                <Link onClick={handleLink} to="/dashboard/addemployee" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Add Employee</Link>
        }
        {
            activeURL === 'viewemployee' ? <Link onClick={handleLink} to="/dashboard/viewemployee" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">View Employee</Link> :
                <Link onClick={handleLink} to="/dashboard/viewemployee" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">View Employee</Link>
        }
        {
            activeURL === 'addproduct' ? <Link onClick={handleLink} to="/dashboard/addproduct" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Add Product</Link> :
                <Link onClick={handleLink} to="/dashboard/addproduct" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Add Product</Link>
        }
        {
            activeURL === 'showproduct' ? <Link onClick={handleLink} to="/dashboard/showproduct" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">Show Product</Link> :
                <Link onClick={handleLink} to="/dashboard/showproduct" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">Show Product</Link>
        }
        {
            activeURL === 'allorders' ? <Link onClick={handleLink} to="/dashboard/allorders" className="btn hover:text-white text-green-200 bg-[#224229] w-4/5 my-2">All Orders</Link> :
                <Link onClick={handleLink} to="/dashboard/allorders" className="btn hover:text-white bg-green-200 text-[#224229] w-4/5 my-2">All Orders</Link>
        }
    </>

    return (
        <div className='w-fit py-10 h-full text-center bg-green-300 rounded-l '>
            <ul className="py-5">
                {
                    userInfo !== null && userInfo?.role === 'sellerUser' && sellerUserLi
                }
                {
                    userInfo !== null && userInfo?.role === 'normalUser' && normalUserLi
                }
                {
                    userInfo !== null && userInfo?.role === 'admin' && adminLi
                }
                {
                    userInfo === null && <Loader></Loader>
                }
            </ul>
        </div>
    );
};

export default Categories;