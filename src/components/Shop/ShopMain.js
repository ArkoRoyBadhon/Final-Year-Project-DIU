import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import toast from 'react-hot-toast';

const ShopMain = () => {
    const [allItems, setAllItems] = useState([]);
    const [mediBtn, setMediBtn] = useState(true);
    const [machBtn, setMachBtn] = useState(false);

    const handleLBtn = () => {
        setMediBtn(true);
        setMachBtn(false);
        fetch(`http://localhost:5000/items/Medicine`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
        }
        const handleRBtn = () => {
            setMediBtn(false);
            setMachBtn(true);
            fetch(`http://localhost:5000/items/Machinaries`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
        }
        
        
        useEffect(() => {
            fetch(`http://localhost:5000/items/Medicine`)
            .then(res => res.json())
            .then(data => setAllItems(data))
            .catch(err => toast.error(err.message))
    }, [])

    return (
        <div className='min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400'>
            <div className="my-10 text-center">
                {/* <Link onClick={handleLBtn} className={mediBtn && 'bg-red-600' }>Medicine</Link> */}
                <Link onClick={handleLBtn} className={mediBtn ? 'bg-red-600 text-md font-bold hover:bg-red-500 p-5 rounded-l-full text-white' : 'bg-blue-300 text-xl font-bold hover:bg-red-500 p-5 rounded-l-full text-black'}>Medicine</Link>
                <Link onClick={handleRBtn} className={machBtn ? 'bg-red-600 text-md font-bold hover:bg-red-500 p-5 rounded-r-full text-white' : 'bg-blue-300 text-xl font-bold hover:bg-red-500 p-5 rounded-r-full text-black'}>Machineries</Link>
            </div>

            <hr className="my-5 w-3/5 mx-auto" />
            <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-5">
                {
                    allItems?.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ShopMain;