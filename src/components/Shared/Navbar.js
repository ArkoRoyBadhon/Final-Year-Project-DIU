import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

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

    useEffect(() => {
        fetch(`http://localhost:5000/userinfo/${user?.email}`)
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
        <div className={color ? 'header header-bg' : 'header'}>
            {/* <div className={'header'}> */}
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/' className="text-red-400 text-2xl font-bold">CropDoctor</Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/information' onClick={closeMenu}>Information</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' onClick={closeMenu}>Shop</Link>
                    </li>
                    {
                        userInfo?.role === "admin" && <li className='nav-item'>
                        {/* // checker && <li className='nav-item'> */}
                            <Link to='/dashboard' onClick={closeMenu}>Dashboard</Link>
                        </li>
                    }
                    {
                        user?.uid ?
                            <li onClick={handleLogOut} className='nav-item border rounded-2xl'>
                                <Link to='/login' onClick={closeMenu}>Logout</Link>
                            </li>
                            :
                            <li className='nav-item border rounded-2xl'>
                                <Link to='/login' onClick={closeMenu}>Login</Link>
                            </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;