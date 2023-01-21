import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsBookmarkHeart, BsCartPlus, BsPerson, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Navbar.css';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({});
    const [checker, setChecker] = useState(false);

    const navigate = useNavigate();

    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close nav color when scrollinh
    const closeMenu = () => setClick(false)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfully!")
                navigate('/login')
            })
            .catch(err => toast.error(err.message))
    }
    const liList = <>
        <li className='nav-item'>
            <Link to='/' onClick={closeMenu}>Home</Link>
        </li>
        <li className='nav-item'>
            <Link to='/predict' onClick={closeMenu}>Predict</Link>
        </li>
        <li className='nav-item'>
            <Link to='/information' onClick={closeMenu}>Information</Link>
        </li>
        <li className='nav-item'>
            <Link to='/blog' onClick={closeMenu}>Blog</Link>
        </li>
        <li className='nav-item'>
            <Link to='/shop' onClick={closeMenu}>Shop</Link>
        </li>
        {
            user?.uid && <li className='nav-item'>
                <Link to='/dashboard' onClick={closeMenu}>Dashboard</Link>
            </li>
        }
        {
            user?.uid ?
                <li onClick={handleLogOut} className='nav-item text-rose-500 rounded-2xl w-fit h-fit'>
                    <Link to='/login' onClick={closeMenu}>Logout</Link>
                </li>
                :
                <li className='nav-item text-green-500 rounded-2xl'>
                    <Link to='/login' onClick={closeMenu}>Login</Link>
                </li>
        }
    </>
    const iconList = <>
        <a className=""><BsSearch></BsSearch></a>
        {
            user?.uid && <>
                <Link to='/dashboard/myprofile' className=""><BsPerson></BsPerson></Link>

            </>
        }
        {
            userInfo?.role === "normalUser" &&
            <>
                <span className='nav-link'>
                    <Link to='/dashboard/bookedmarkitems' className="" onClick={closeMenu}><BsBookmarkHeart></BsBookmarkHeart></Link>
                </span>

                <span className='nav-item'>
                    <Link to='/cart' onClick={closeMenu}><BsCartPlus></BsCartPlus></Link>
                </span>
            </>
        }
    </>
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

    // console.log(userInfo[0].role);

    return (
        // <div className={color ? 'header header-bg  bg-white text-slate-800' : 'header  bg-white text-slate-800'}>
        //     {/* <div className={'header'}> */}
        //     <nav className='navbar'>
        //         <div className='logo'>
        //             <Link to='/' className=" text-2xl font-bold uppercase text-green-400">CropDoctor</Link>
        //         </div>
        //         <div className='hamburger' onClick={handleClick}>
        //             {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
        //                 : (<FaBars size={30} style={{ color: '#000000' }} />)}
        //         </div>
        //         <ul className={click ? "nav-menu active text-slate-800" : "nav-menu text-slate-800"}>
        //             <li className='nav-item'>
        //                 <Link to='/' onClick={closeMenu}>Home</Link>
        //             </li>
        //             <li className='nav-item'>
        //                 <Link to='/predict' onClick={closeMenu}>Predict</Link>
        //             </li>
        //             <li className='nav-item'>
        //                 <Link to='/information' onClick={closeMenu}>Information</Link>
        //             </li>
        //             <li className='nav-item'>
        //                 <Link to='/blog' onClick={closeMenu}>Blog</Link>
        //             </li>
        //             <li className='nav-item'>
        //                 <Link to='/shop' onClick={closeMenu}>Shop</Link>
        //             </li>
        //             {
        //                 userInfo?.role === "admin" && <li className='nav-item'>
        //                     {/* // checker && <li className='nav-item'> */}
        //                     <Link to='/dashboard' onClick={closeMenu}>Dashboard</Link>
        //                 </li>
        //             }

        //             {
        //                 userInfo?.role === "normalUser" && <li className='nav-item'>
        //                     {/* // checker && <li className='nav-item'> */}
        //                     <Link to='/cart' onClick={closeMenu}>Cart</Link>
        //                 </li>
        //             }

        //             {
        //                 user?.uid ?
        //                     <li onClick={handleLogOut} className='nav-item border rounded-2xl '>
        //                         <Link to='/login' onClick={closeMenu}>Logout</Link>
        //                     </li>
        //                     :
        //                     <li className='nav-item border rounded-2xl'>
        //                         <Link to='/login' onClick={closeMenu}>Login</Link>
        //                     </li>
        //             }

        //         </ul>
        //     </nav>
        // </div>
        <div className="navbar bg-base-100 px-6 shadow-sm sticky top-0 z-[100]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {liList}
                        <li className='nav-item flex flex-row gap-0 text-2xl'>
                            {iconList}
                        </li>
                    </ul>
                </div>
                <Link to='/' className=" text-xl md:text-2xl font-bold uppercase text-[#224220]">CropDoctor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase text-sm font-normal">
                    {liList}
                </ul>
            </div>
            <div className="navbar-end lg:flex gap-5 items-center text-2xl hidden ">
                {iconList}
            </div>
        </div>
    );
};

export default Navbar;