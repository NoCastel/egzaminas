import { useState } from "react";

function ItemToBackUnit({ item, setUpdateCategory, setDeleteUnit }) {
    const [category, setCategory] = useState(1);
    const inputHandler = (event) => {
        setCategory(event.target.value);
    }
    const updateCat = (event) => {
        setUpdateCategory({category, unit_id: item.unit_id})
        setCategory(1);
    }

    // ['drama', 'comedy', 'horror', 'novel', 'family']
    return (
        <li className="border-b-4 py-1">
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-xl'>Name: {item.unit}</div>
                <select className="w-2/3 md:w-1/3 px-2 py-1 bg-white border border-gray-200 rounded shadow-sm appearance-none cursor-pointer" onChange={inputHandler} value={item.categor} >
                    <option value="1">drama</option>
                    <option value="2">comedy</option>
                    <option value="3">horror</option>
                    <option value="4">novel</option>
                    <option value="5">family</option>
                </select>
                <div className=''>Category: {['drama', 'comedy', 'horror', 'novel', 'family'][item.category - 1]}</div>
            </div>
            <div className="flex gap-2 mb-4 mt-4">
                <button className='bg-pink-400 hover:bg-red-600 text-red-50 text-sm rounded flex justify-center items-center p-1' onClick={updateCat}>Update</button>
                <button className='bg-red-500 hover:bg-red-600 text-red-50 text-sm rounded flex justify-center items-center p-1' onClick={() => setDeleteUnit({ unit_id: item.unit_id })}>Delete</button>
            </div>
        </li >
    )
}

export default ItemToBackUnit;