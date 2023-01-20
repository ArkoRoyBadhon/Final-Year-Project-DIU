import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Item from './Item';

const ShopMain = () => {
    const [allItems, setAllItems] = useState([]);
    const [mediBtn, setMediBtn] = useState(true);
    const [machBtn, setMachBtn] = useState(false);

    const handleLBtn = () => {
        setMediBtn(true);
        setMachBtn(false);
        fetch(`http://localhost:5005/items/Medicine`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
        }
        const handleRBtn = () => {
            setMediBtn(false);
            setMachBtn(true);
            fetch(`http://localhost:5005/items/Machinaries`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
        }
        
        
        useEffect(() => {
            fetch(`http://localhost:5005/items/Medicine`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
    }, [])

    return (
        <div className='pb-10'>
            <div className="my-10 text-center">
                {/* <Link onClick={handleLBtn} className={mediBtn && 'bg-red-600' }>Medicine</Link> */}
                <Link onClick={handleLBtn} className={mediBtn ? 'bg-[#224229] text-md font-bold hover:bg-[#224229] p-5 rounded-l-full text-white' : 'bg-slate-300 text-xl font-bold hover:bg-[#224229] p-5 rounded-l-full text-slate-600'}>Medicine</Link>
                <Link onClick={handleRBtn} className={machBtn ? 'bg-[#224229] text-md font-bold hover:bg-[#224229] p-5 rounded-r-full text-white' : 'bg-slate-300 text-xl font-bold hover:bg-[#224229] p-5 rounded-r-full text-slate-600'}>Machineries</Link>
            </div>
            
            <div className="w-[97%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allItems?.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ShopMain;