import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ItemToFront from './ItemToFront';
import Modal from './Modal';

function Front({ show }) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [items, setItems] = useState([]);
    const [units, setUnits] = useState([]);
    const [unit, setUnit] = useState({});
    const [search, setSearch] = useState('');
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:6174/front/main`)
            .then(res => setItems(res.data))
    }, [lastUpdate]);

    useEffect(() => {
        axios.get(`http://localhost:6174/front/unit`)
            .then(res => setUnits(res.data))
    }, [items]);


    // useEffect(() => {
    //     axios.get(`http://localhost:6174/front/units/all`)
    //         .then(res => setAllUnits(res.data))
    // }, [items]);

    const searchBy = (event) => {
        setSearch(event.target.value);
    }


    return (
        <div className='w-5/6 mx-auto bg-gray-200'>
            <header className="bg-gradient-to-l from-sky-800 to-sky-900 text-gray-50 flex flex-col md:flex-row items-center md:justify-between mt-5 md:mt-0 px-6 py-4 border-b border-b-gray-60 shadow-sm shadow-blue-300 max-w-screen-2xl">
                <h3 className='text-xl font-bold'>
                    <Link to="/" className='uppercase'>Library</Link>
                </h3>
                <nav className='flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0'>
                    <Link className="font-semibold tracking-tight block cursor-pointer px-1 py-2 hover:text-blue-400 transition-colors duration-300 captialize" to="/">Home</Link>
                </nav>
            </header>
            <main>
                <div className='font-semibold px-6 py-1 pb-1'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border focus:ring-gray-300 focus:border-sky-200 bg-gray-50 border-gray-300 placeholder-gray-700" placeholder="Search ..." onChange={searchBy} />
                    </div>
                </div>
                <h2 className='text-3xl font-semibold mt-2 px-10 py-1'>Book list</h2>
                <ul className="flex flex-col justify-between gap-1 rounded px-5 py-1">
                    {
                        units
                            .filter(unit => search !== "" ? unit.unit.toLowerCase().includes(search.toLowerCase()) ||  (['drama','comedy', 'horror', 'novel', 'family'][unit.category-1]).toLowerCase().includes(search.toLowerCase()): unit)
                            .map(unit =>
                                <ItemToFront key={unit.unit_id} item={items.filter(e => e.main_id === unit.main_id)[0]} unit={unit} setModalData={setModalData} />
                            )
                    }
                </ul>
            </main>
            <footer className='bg-gradient-to-l from-sky-800 to-sky-900 text-gray-50 flex justify-end px-6 py-4 shadow-sm shadow-blue-300 max-w-screen-2xl'>
                <h3 className='font-semibold cursor-pointer'>Contacts</h3>
            </footer>
            {/* <Modal modalData={modalData} setModalData={setModalData} /> */}
        </div>
    )
}

export default Front;