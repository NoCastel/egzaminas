import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ItemToBack from './ItemToBack';
import { authConfig } from '../../Functions/auth';
import ItemToBackUnit from './ItemToBackUnit';
import Create from './Create';

function Back() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [items, setItems] = useState([]);
    const [units, setUnits] = useState([]);

    const [updateCategory, setUpdateCategory] = useState(null);
    const [deleteUnit, setDeleteUnit] = useState(null);
    const [deleteItem, setDeleteItem] = useState(null);

    const [createData, setCreateData] = useState(null);

    // Items
    useEffect(() => {
        axios.get(`http://localhost:6174/admin/items`, authConfig())
        .then(res => setItems(res.data))
    }, [lastUpdate]);

    useEffect(() => {
        if (null === deleteItem) { return; }
        axios.delete(`http://localhost:6174/admin/items/${deleteItem.main_id}`, authConfig())
            .then(res => setLastUpdate(Date.now()));
    }, [deleteItem])


    //Units
    useEffect(() => {
        axios.get(`http://localhost:6174/admin/units`, authConfig())
        .then(res => setUnits(res.data));
    }, [items]);
    
    useEffect(() => {
        if (null === createData) { return; }
        axios.post(`http://localhost:6174/admin/units`, createData, authConfig())
            .then(res => setLastUpdate(Date.now()));
    }, [createData]);

    useEffect(() => {
        if (null === updateCategory) { return; }
        axios.put(`http://localhost:6174/admin/units/${updateCategory.unit_id}`, updateCategory, authConfig())
            .then(res => setLastUpdate(Date.now()));
    }, [updateCategory]);

    useEffect(() => {
        if (null === deleteUnit) { return; }
        axios.delete(`http://localhost:6174/admin/units/${deleteUnit.unit_id}`, authConfig())
            .then(res => setLastUpdate(Date.now()));
    }, [deleteUnit])




    return (
        <>
            <div className="container mx-auto bg-gray-200 w-5/6">
                <header className='bg-gradient-to-l from-sky-800 to-sky-900 text-gray-50 flex flex-col md:flex-row items-center md:justify-between mt-5 md:mt-0 px-6 py-4 border-b border-b-gray-60 shadow-sm shadow-blue-300 max-w-screen-2xl'>
                    <h2 className='font-semibold text-xl uppercase'>Admin</h2>
                    <nav className='flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0'>
                        <div className='cursor-pointer'><a href="/" target={"_blanc"}>Front&nbsp;Page</a></div>
                        <div className='cursor-pointer'><Link to="/logout">Log&nbsp;out</Link></div>
                    </nav>
                </header>
                <main className='container flex flex-col gap-4 p-1'>
                    <Create setCreateData={setCreateData} />
                    <h2 className='font-semibold text-2xl px-4'>Create</h2>
                    <div className='flex lg:flex-row flex-col gap-4 p-4'>
                        <div className="bg-sky-200  w-full">
                            <h2 className="font-bold text-3xl p-4 capitalize">User&nbsp;list</h2>
                            <ul className="px-4 flex flex-col border-b">
                                {
                                    items
                                        .map((item, i) =>
                                            <ItemToBack key={i} item={item} setDeleteItem={setDeleteItem} />
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-4 p-4'>
                        <div className="bg-sky-200  w-full">
                            <h2 className="font-bold text-3xl p-4 capitalize">Book&nbsp;list</h2>
                            <ul className="px-4 flex flex-col border-b">
                                {
                                    units
                                        .map((item, i) =>
                                            <ItemToBackUnit key={i} item={item} setUpdateCategory={setUpdateCategory} setDeleteUnit={setDeleteUnit} />
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Back;