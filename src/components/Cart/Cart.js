import React from 'react';

const Cart = () => {
    return (
        <div className='min-h-screen'>
            <div className="w-4/5 card rounded-lg mx-auto min-h-[40rem] mt-10 bg-base-200 grid grid-cols-6">
                <div className="col-span-4 bg-red-100 h-full p-10 text-black rounded-l-lg">
                    <div className="flex justify-between w-full">
                        <h2 className="text-xl font-bold">Shopping Cart</h2>
                        <h4 className="text-lg">2 Items</h4>
                    </div>
                    <table className='table-sm md:table w-full mx-auto mt-6 text-white'>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>
                                    <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                                </td>
                                <td>Nitro</td>
                                <td>1</td>
                                <td>165</td>
                                <td>
                                    <button className='btn btn-error'>Delete</button>
                                </td>
                            </tr>
                            <tr>
                            <td>2</td>
                                <td>
                                    <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                                </td>
                                <td>Sulfer</td>
                                <td>1</td>
                                <td>189</td>
                                <td>
                                    <button className='btn btn-error'>Delete</button>
                                </td>
                            </tr>
                            <tr>
                            <td>3</td>
                                <td>
                                    <img className='rounded-3xl w-20' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="no img" />
                                </td>
                                <td>Imitaf 20 SL 50ml</td>
                                <td>2</td>
                                <td>365</td>
                                <td>
                                    <button className='btn btn-error'>Delete</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className='col-span-2 bg-violet-300 p-10 rounded-r-lg text-black'>
                    <h2 className='text-xl font-bold'>Order Summary</h2>
                    <div className=''>
                        <p className="">Total Item: 4</p>
                        <p className="">Total Price: 365 TK</p>

                        <button className='btn mt-5 btn-outline btn-secondary'>Proceed to Buy</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;