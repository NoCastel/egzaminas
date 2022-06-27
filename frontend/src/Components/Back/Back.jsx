import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ItemToBack from './ItemToBack';
import { authConfig } from '../../Functions/auth';

function Back() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [items, setItems] = useState([]);

    const [approval, setApproval] = useState(null);
    const [deleteThing, setDeleteThing] = useState(null);
    const [createContainer, setCreateContainer] = useState(null);
    const [createBox, setCreateBox] = useState(null);

    // Read
    useEffect(() => {
        axios.get(`http://localhost:6174/admin`, authConfig())
            .then(res => setItems(res.data))
    }, [lastUpdate]);

    //extra
    // useEffect(() => {
    //     if (null === approval) { return; }
    //     axios.put(`http://localhost:6174/admin/container`, approval, authConfig())
    //         .then(res => setLastUpdate(Date.now()));
    // }, [createBox]);

    // useEffect(() => {
    //     if (null === deleteThing) { return; }
    //     axios.delete(`http://localhost:6174/admin/delete-thing/${deleteThing.main_id}`, authConfig())
    //         .then(res => setLastUpdate(Date.now()));
    // }, [deleteThing]);



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
                    <h2 className='font-semibold text-2xl px-4'>Create</h2>
                    <div className='flex lg:flex-row flex-col gap-4 p-4'>
                        <div className="bg-sky-200  w-full">
                            <h2 className="font-bold text-3xl p-4 capitalize">item&nbsp;list</h2>
                            <ul className="px-4 flex flex-col border-b">
                                {
                                    items
                                        .map((item, i) =>
                                            <ItemToBack key={item.main_id} item={item} setApproval={setApproval} setDeleteThing={setDeleteThing} />
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