import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

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
    }
    const handleRBtn = () => {
        setMediBtn(false);
        setMachBtn(true);
        fetch(`http://localhost:5000/items/Machinaries`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }

    const activeClass = {
        backgroundColor: "red"
    }


    useEffect(() => {
        fetch(`http://localhost:5000/items/Medicine`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return (
        <div>
            <div className="my-10">
                {/* <Link onClick={handleLBtn} className={mediBtn && 'bg-red-600' }>Medicine</Link> */}
                <Link onClick={handleLBtn} className={mediBtn ? 'bg-red-600 text-xl font-bold hover:bg-red-500 p-5 rounded-l-full' : 'bg-blue-300 text-xl font-bold hover:bg-red-500 p-5 rounded-l-full'}>Medicine</Link>
                <Link onClick={handleRBtn} className={machBtn ? 'bg-red-600 text-xl font-bold hover:bg-red-500 p-5 rounded-r-full' : 'bg-blue-300 text-xl font-bold hover:bg-red-500 p-5 rounded-r-full'}>Machineries</Link>
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