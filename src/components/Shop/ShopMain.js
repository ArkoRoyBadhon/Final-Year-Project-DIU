import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Item from './Item';
import { AuthContext } from '../../Context/AuthProvider';

const ShopMain = () => {
    const [allItems, setAllItems] = useState([]);
    const [mediBtn, setMediBtn] = useState(true);
    const [machBtn, setMachBtn] = useState(false);
    const [refetch, setReFetch] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLBtn = () => {
        setMediBtn(true);
        setMachBtn(false);
        fetch(`http://localhost:5005/items/Medicine?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
    }
    const handleRBtn = () => {
        setMediBtn(false);
        setMachBtn(true);
        fetch(`http://localhost:5005/items/Machinaries?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
    }


    useEffect(() => {
        if (mediBtn) {
            fetch(`http://localhost:5005/items/Medicine?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setAllItems(data))
                .catch(err => toast.error(err.message))
        }
    }, [user, refetch, setMediBtn])

    useEffect(() => {
        if (machBtn) {
            fetch(`http://localhost:5005/items/Machinaries?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setAllItems(data))
                .catch(err => toast.error(err.message))
        }
    }, [user, refetch, setMachBtn])


    const handleBookedMark = (item) => {
        const insertData = {
            productId: item.productId,
            email: user?.email
        }
        fetch('http://localhost:5005/managebookedmarkitems', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(insertData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 'add') {
                    toast.success(data.status)
                }
                else if (data.code === 'remove') {
                    toast.error(data.status)
                }
                else {
                    toast.error('Something wrong!')
                }
                setReFetch(!refetch)
            })
        console.log(item)
    }

    return (
        <div className='pb-10 bg-green-100'>
            <div className="my-10 text-center">
                {/* <Link onClick={handleLBtn} className={mediBtn && 'bg-red-600' }>Medicine</Link> */}
                <Link onClick={handleLBtn} className={mediBtn ? 'bg-[#224229] text-md font-bold hover:bg-[#224229] hover:text-white p-5 rounded-l-full text-white' : 'bg-slate-300 text-xl font-bold hover:bg-[#224229] p-5 rounded-l-full text-slate-600 hover:text-white'}>Medicine</Link>
                <Link onClick={handleRBtn} className={machBtn ? 'bg-[#224229] text-md font-bold hover:bg-[#224229] p-5 rounded-r-full text-white hover:text-white' : 'bg-slate-300 text-xl font-bold hover:bg-[#224229] p-5 rounded-r-full text-slate-600 hover:text-white'}>Machineries</Link>
            </div>

            <div className="w-[97%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allItems?.map(item => <Item key={item._id} item={item} handleBookedMark={handleBookedMark} />)
                }
            </div>
        </div>
    );
};

export default ShopMain;