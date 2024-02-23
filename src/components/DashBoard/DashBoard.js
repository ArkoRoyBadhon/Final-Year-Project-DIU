import React, { useContext, useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ViewProduct from '../ViewProduct/ViewProduct';
import AddEmployee from './AddEmployee';
import AddProduct from './AddProduct';
import AllOrders from './AllOrders';
import AllUsers from './AllUsers';
import BookedmarkItems from './BookedmarkItems';
import Categories from './Categories';
import EditEmployee from './EditEmployee';
import EditProduct from './EditProduct';
import ManageAdmin from './ManageAdmin';
import MyOrders from './MyOrders';
import MyProductOrders from './MyProductOrders';
import MyProfile from './MyProfile';
import ShowProduct from './ShowProduct';
import ViewEmployee from './ViewEmployee';


const DashBoard = ({ children }) => {
    const { user } = useContext(AuthContext)


    const [boolValue, setBoolValue] = useState(false);

    const [cLocation, setCLocation] = useState("");
    const [url, setUrl] = useState('/dashboard')
    const path = useLocation()
    // console.log(path);
    const [pass, setPass] = useState(false)
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()
    const adminLi = ['manageadmin', 'viewemployee', 'addemployee', 'allusers', 'showproduct', 'addproduct', 'allorders', 'editproduct', 'myprofile', 'viewproduct', 'myproductorders', 'editemployee', 'dashboard']
    const superAdminLi = ['manageadmin', 'viewemployee', 'addemployee', 'allusers', 'showproduct', 'addproduct', 'allorders', 'editproduct', 'myprofile', 'viewproduct', 'myproductorders', 'editemployee', 'dashboard']
    const sellerLi = ['showproduct', 'addproduct', 'editproduct', 'myprofile', 'viewproduct', 'myproductorders', 'dashboard']
    const normalUserLi = ['bookedmarkitems', 'myorders', 'myprofile', 'viewproduct', 'dashboard']

    const [reFetch, setRefetch] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [page, setPage] = useState(true);


    useEffect(() => {
        const width = window.screen.width
        if (width < 800) {
            setShowNavbar(false)
            setPage(true)
        }
        else {
            setShowNavbar(true)
            setPage(true)
        }

    }, [])

    useEffect(() => {

        let nowPath = path.pathname.split('/')[2]

        if (nowPath === undefined) {
            return navigate('/dashboard/myprofile')
        }
        else {
            setUrl(nowPath)
        }

        fetch(`https://cropdoctor-server.vercel.app/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // setRefetch(false)
                setUserInfo(data)
                // console.log(data)
                if (data[0].role === 'admin') {

                    const check = adminLi.includes(nowPath);
                    if (check) {
                        setPass(true)
                    }
                    else {
                        setPass(true)
                        return navigate('/dashboard/myprofile')
                    }
                }
                else if (data[0].role === 'sellerUser') {

                    const check = sellerLi.includes(nowPath);
                    if (check) {
                        setPass(true)
                    }
                    else {
                        return navigate('/dashboard/myprofile')

                    }
                }
                else if (data[0].role === 'superUser') {

                    const check = superAdminLi.includes(nowPath);
                    if (check) {
                        setPass(true)
                    }
                    else {
                        return navigate('/dashboard/myprofile')

                    }
                }
                else if (data[0].role === 'normalUser') {

                    const check = normalUserLi.includes(nowPath);
                    if (check) {
                        setPass(true)
                    }
                    else {
                        return navigate('/dashboard/myprofile')

                    }
                }
                else {
                    navigate('/')
                }
                // if (url === 'myprofile') {
                //     setPass(true)
                // }
                // else if (url === undefined && path.pathname.split('/')[1] === 'dashboard') {
                //     return navigate('/dashboard/myprofile')
                // }
                // else if (url === 'manageadmin' || url == 'viewemployee' || url == 'addemployee' || url == 'allusers') {
                //     if (data[0].role !== 'admin') {
                //         // setPass(false)
                //         return navigate('/dashboard/myprofile')
                //     }
                //     else {
                //         setPass(true)
                //     }
                // }
                // else if (url == 'bookedmarkitems' || url == 'myorders') {
                //     if (data[0].role !== 'normalUser') {
                //         // setPass(false)
                //         return navigate('/dashboard/myprofile')
                //     }
                //     else {
                //         setPass(true)
                //     }
                // }
                // else if (url == 'showproduct' || url == 'addproduct' || url == 'allorders' || url == 'editproduct') {
                //     if (data[0].role === 'normalUser') {
                //         // setPass(false)
                //         return navigate('/dashboard/myprofile')
                //     }
                //     else {
                //         setPass(true)
                //     }
                // }

                setUserInfo(data[0])
                // setPass(true)
            })
            .catch(err => console.log(err.message))
    }, [user, boolValue, path])

    const handleLink = () => {
        setBoolValue(true);
    }

    const handleCollapse = () => {
        const width = window.screen.width
        if (width < 800) {
            setShowNavbar(!showNavbar)
            setPage(!page)
        }
        else {
            setShowNavbar(!showNavbar)
            setPage(true)
        }
    }
    // console.log(user, userInfo);

    return (
        <div className='bg-white  py-10 px-4 '>

            <div className="flex flex-row">
                {
                    showNavbar === false ? <></>
                        :
                        <div className={`col-span-2 w-[25%] min-w-[300px]  mx-auto ${page ? 'rounded-l-xl rounded-r-none' : "rounded-xl"}`}>
                            <Categories handleLink={handleLink} handleCollapse={handleCollapse} />
                        </div>
                }
                {
                    page === false ? <></>
                        :
                        <div className={`pb-1 md:pb-8 
                         bg-green-200 ${showNavbar ? 'w-[75%] rounded-l-none rounded-r-xl' : 'w-[100%] rounded-xl'} `}>
                            <div>
                                <span className='text-right flex justify-start ml-3 mt-[10px] w-fit' onClick={handleCollapse}>
                                    <BsList className='text-2xl font-extrabold cursor-pointer'></BsList>
                                </span>
                            </div>

                            {
                                reFetch == false && pass === true && <>
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
                                    {
                                        url === "viewproduct" && <ViewProduct />
                                    }
                                    {
                                        url === "editproduct" && <EditProduct />
                                    }
                                    {
                                        url === 'myproductorders' && <MyProductOrders />
                                    }
                                    {
                                        url === 'editemployee' && <EditEmployee />
                                    }
                                </>
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default DashBoard;