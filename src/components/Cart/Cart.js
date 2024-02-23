import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Shared/Loader';


const Cart = () => {

    const { user, logOut } = useContext(AuthContext);

    const [localData, setLocalData] = useState(null);
    const [cartItems, setCartItems] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [reFetch, setRefetch] = useState(false);
    const [wait, setWait] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cropdoctor-cart'))
        if (data == null) {
            setLocalData([])
        }
        else {
            setLocalData(data)
        }
        setWait(false)
    }, [reFetch])

    const increaseQuantity = (productId) => {
        let predata = cartItems;
        let newData = predata.map(item => {
            let data;
            if (item.productId == productId) {
                data = {
                    ...item,
                    quantity: item.quantity + 1
                }
                return data
            }
            else {
                return item
            }
        })
        setCartItems(newData)
        let sum = 0;
        const tPrice = newData.map(item => {
            return sum += item.quantity * item.price
        })
        setTotalPrice(tPrice[tPrice.length - 1])
    }
    const decreaseQuantity = (productId) => {
        let predata = cartItems;
        let newData = predata.map(item => {
            let data;
            if (item.productId == productId) {
                data = {
                    ...item,
                    quantity: item.quantity - 1
                }
                return data
            }
            else {
                return item
            }
        })
        setCartItems(newData)
        let sum = 0;
        const tPrice = newData.map(item => {
            return sum += item.quantity * item.price
        })
        setTotalPrice(tPrice[tPrice.length - 1])
    }

    useEffect(() => {
        if (localData?.email === user?.email && localData !== null && localData.email !== undefined) {
            const idList = localData.productsId;
            fetch(`https://cropdoctor-server.vercel.app/getcartitems`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(idList)
            })
                .then(res => res.json())
                .then(data => {
                    setCartItems(data)
                    let sum = 0;
                    const tPrice = data.map(item => {
                        return sum += item.quantity * item.price
                    })
                    setTotalPrice(tPrice[tPrice.length - 1])
                })
        }
        else {

        }
    }, [localData, user])

    const deleteItem = (productId) => {
        console.log(productId)
        const filterData = localData.productsId.filter(item => {
            if (item !== productId) {
                return item;
            }
            else {
            }
        })
        const newData = {
            email: user?.email,
            productsId: filterData
        }
        localStorage.setItem("cropdoctor-cart", JSON.stringify(newData));
        toast.error('Remove item!')
        setRefetch(!reFetch)
    }

    const handleOrder = () => {
        console.log(cartItems, totalPrice)
        const orderData = {
            payment: false,
            cartItems, totalPrice, orderPersonEmail: user?.email, orderDate: new Date()
        }
        fetch(`https://cropdoctor-server.vercel.app/placeorder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedCount > 0) {
                    toast.success('Order Place Successfully!');
                    localStorage.removeItem("cropdoctor-cart");
                    setRefetch(!reFetch)
                    return navigate('/dashboard/myorders')
                }
                else {
                    toast.error('Something Error!')
                }
            })
    }

    return (
        <div className='bg-green-200 pb-10'>
            <div className="w-[96%] card rounded-lg mx-auto  mt-10  grid grid-cols-1  ">
                {
                    cartItems == null && wait === true && <Loader></Loader>
                }
                {
                    localData && localData.length === 0 && <h2 className='text-2xl py-28 font-bold text-rose-500 text-center '>No Products Selected</h2>
                }
                {
                    cartItems && <>
                        {
                            cartItems.length === 0 ? <h2 className='text-2xl py-28 font-bold text-rose-500 text-center '>No Products Selected</h2>
                                : <>
                                    <div className="col-span-1  bg-green-200  p-10 text-black rounded mb-7">
                                        <div className="flex justify-between w-full">
                                            <h2 className="text-xl font-bold">Shopping Cart</h2>
                                            <h4 className="text-lg text-red-500">{cartItems.length} Items</h4>
                                        </div>
                                        <div className="overflow-auto">
                                            <table className='table w-full mx-auto mt-6 text-black'>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Photo</th>
                                                        <th>Name</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cartItems.map((item, index) =>
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    <img className='rounded-3xl w-14 h-14' src={item.photo} alt="no img" />
                                                                </td>
                                                                <td>{item.name}</td>
                                                                <td>
                                                                    {
                                                                        item.quantity == 1 ? <button className='text-lg btn btn-error btn-sm ' disabled onClick={() => decreaseQuantity(item.productId)}>-</button> :
                                                                            <button className='text-lg btn btn-error btn-sm' onClick={() => decreaseQuantity(item.productId)}>-</button>
                                                                    }
                                                                    <span className='mx-3'>{item.quantity}</span>
                                                                    <button className='text-lg btn btn-success btn-sm' onClick={() => increaseQuantity(item.productId)}>+</button>
                                                                </td>
                                                                <td>{item.price}Tk</td>
                                                                <td>
                                                                    <button className='btn btn-error btn-sm' onClick={
                                                                        () => deleteItem(item.productId)
                                                                    }>Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='col-span-1 text-2xl  bg-green-300 rounded mt-10 text-black '>
                                            <h2 className='text-xl font-bold rounded-t bg-slate-800 p-6 px-10 w-full text-white'>Order Summary</h2>
                                            <div className="p-10">
                                                <div className='mt-5 font-bold text-xl'>
                                                    <p className="">Total Item: <span className='text-lg font-semibold text-rose-500'>{cartItems.length}</span></p>
                                                    <p className="">Total Price: <span className='text-lg font-semibold text-rose-500'>{
                                                        totalPrice
                                                    }Tk</span></p>
                                                    <button onClick={() => handleOrder()} className='btn mt-5 bg-[#224229] text-white w-full max-w-[300px] mx-auto'>Order to Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                        }
                    </>
                }
            </div>

        </div>
    );
};

export default Cart;