import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Create({ setCreateData }) {

    const [unit, setUnit] = useState('');
    const [category, setCategory] = useState(1);

    const buttonHandler = () => {
        if (unit.length > 0 && category > 0) {
            setCreateData({ unit, category });
            setUnit('');
            setCategory(1);
        }
    }
    
    const inputHandler = (event, which) => {
        switch (which) {
            case 'unit': setUnit(event.target.value); break;
            case 'category': setCategory(event.target.value); break;
            default:
        }
    }

console.log(category);
    return (
        <div className="container mx-auto bg-gray-200 w-5/6">
            <main className='container flex flex-col gap-4 p-1'>
                <div className='flex lg:flex-row flex-col gap-4 p-4'>
                    <div className="h-fit bg-sky-200 lg:w-1/3 w-full">
                        <div className="p-4 flex flex-col gap-3">
                            <h2 className="text-2xl font-semibold capitalize">Add idea</h2>
                            <div className="flex flex-col justify-between gap-2">
                                <div className="flex flex-col justify-between gap-2 ">
                                    <label className="font-semibold">Book unit:</label>
                                    <input type="text" className="w-2/3 px-1" onChange={event => inputHandler(event, 'unit')} value={unit} />
                                </div>
                                <select className="w-2/3 md:w-1/3 px-2 py-1 bg-white border border-gray-200 rounded shadow-sm appearance-none cursor-pointer" onChange={event => inputHandler(event, 'category')} value={category} >
                                    <option value="1">drama</option>
                                    <option value="2">comedy</option>
                                    <option value="3">horror</option>
                                    <option value="4">novel</option>
                                    <option value="5">family</option>
                                </select>
                                <div className="buttons">
                                    <button type="button" className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-1 px-2 rounded" onClick={buttonHandler}>Add</button>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </main>
        </div>




    )
}
export default Create;