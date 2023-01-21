import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AddEmployee from './AddEmployee';
import AddProduct from './AddProduct';
import AllOrders from './AllOrders';
import AllUsers from './AllUsers';
import BookedmarkItems from './BookedmarkItems';
import Categories from './Categories';
import ManageAdmin from './ManageAdmin';
import MyOrders from './MyOrders';
import MyProfile from './MyProfile';
import ShowProduct from './ShowProduct';
import ViewEmployee from './ViewEmployee';

const DashBoard = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [boolValue, setBoolValue] = useState(false);

    const [cLocation, setCLocation] = useState("");
    const [url, setUrl] = useState('/dashboard')
    const path = useLocation()
    const [pass, setPass] = useState(false)
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        setUrl(path.pathname.split('/')[2])
        fetch(`http://localhost:5005/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data[0])
                console.log(url, pass)
                if (url === 'myprofile') {
                    setPass(true)
                }
                else if (url === undefined && path.pathname.split('/')[1] === 'dashboard') {
                    return navigate('/dashboard/myprofile')
                }
                else if (url === 'manageadmin' || url == 'viewemployee' || url == 'addemployee' || url == 'allusers') {
                    if (data[0].role !== 'admin') {
                        setPass(false)
                        return navigate('/dashboard/myprofile')
                    }
                    else {
                        setPass(true)
                    }
                }
                else if (url == 'bookedmarkitems' || url == 'myorders') {
                    if (data[0].role !== 'normalUser') {
                        setPass(false)
                        return navigate('/dashboard/myprofile')
                    }
                    else {
                        setPass(true)
                    }
                }
                else if (url == 'showproduct' || url == 'addproduct' || url == 'allorders') {
                    console.log(data[0].role);
                    if (data[0].role === 'normalUser') {
                        setPass(false)
                        return navigate('/dashboard/myprofile')
                    }
                    else {
                        setPass(true)
                    }
                }
            })
            .catch(err => console.log(err.message))
    }, [user, url, boolValue, path])

    const handleLink = () => {
        setBoolValue(true);
    }

    return (
        <div className='bg-green-100  py-10 px-4 rounded-xl'>
            <h2 className='text-2xl font-medium text-center pb-6 text-green-900'>Hello, <span className='font-bold'>{user.displayName}!</span><br /> Welcome to DashBoard</h2>

            <div className="grid grid-cols-10">
                <div className="col-span-2  rounded-l-xl hidden lg:flex">
                    <Categories handleLink={handleLink} />
                </div>
                <div className="col-span-10 lg:col-span-8 pb-8 rounded-xl  lg:rounded-r-xl rounded-l-none bg-green-200">

                    {
                        pass === true && <>
                            {
                                url === "dashboard" && <MyProfile />
                            }
                            {
                                url === "allusers" && <AllUsers />
                            }
                            {url === "addproduct" && <AddProduct />
                            }
                            {
                                url === "showproduct" && <ShowProduct />
                            }
                            {
                                url === "manageadmin" && <ManageAdmin />
                            }
                            {
                                url === "addemployee" && <AddEmployee />
                            }
                            {
                                url === "viewemployee" && <ViewEmployee />
                            }
                            {
                                url === "myprofile" && <MyProfile />
                            }
                            {
                                url === "bookedmarkitems" && <BookedmarkItems />
                            }
                            {
                                url === "myorders" && <MyOrders />
                            }
                            {
                                url === "allorders" && <AllOrders />
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashBoard;