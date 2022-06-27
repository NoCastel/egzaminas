import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import changeBase from "../../Functions/changeBase";
import axios from 'axios';


function Create() {
    const [createData, setCreateData] = useState({});
    const [name, setName] = useState('');
    const [creator, setCreator] = useState('');
    const [goal, setGoal] = useState('');
    const fileInput = useRef();


    useEffect(() => {
        axios.post(`http://localhost:6174/front/create`, createData);
    }, [createData]);

    const buttonHandler = () => {
        const file = fileInput.current.files[0];

        if (!name || !goal || !file) { return; }

        if (file) {
            changeBase(file).then(picture => {
                setCreateData({ name, goal, picture, creator });
            })
            setName('');
            setCreator('');
            setGoal('');
        } 
    }

    const inputHandler = (event, which) => {
        switch (which) {
            case 'name': setName(event.target.value); break;
            case 'creator': setCreator(event.target.value); break;
            case 'goal':
                if (+event.target.value < 0 || +event.target.value > 999) { return; }
                setGoal(event.target.value);
                break;
            default:
        }
    }

    console.log(createData);
    return (
        <div className="container mx-auto bg-gray-200 w-5/6">
            <header className='bg-gradient-to-l from-sky-800 to-sky-900 text-gray-50 flex flex-col md:flex-row items-center md:justify-between mt-5 md:mt-0 px-6 py-4 border-b border-b-gray-60 shadow-sm shadow-blue-300 max-w-screen-2xl'>
                <h2 className='font-semibold text-xl uppercase'>Admin</h2>
                <nav className='flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0'>
                    <Link className="font-semibold tracking-tight block cursor-pointer px-1 py-2 hover:text-blue-400 transition-colors duration-300 captialize" to="/">Home</Link>
                    <Link className="font-semibold tracking-tight block cursor-pointer px-1 py-2 hover:text-blue-400 transition-colors duration-300 captialize" to="/create">Create</Link>
                </nav>
            </header>
            <main className='container flex flex-col gap-4 p-1'>
                <div className='flex lg:flex-row flex-col gap-4 p-4'>
                    <div className="h-fit bg-sky-200 lg:w-1/3 w-full">
                        <div className="p-4 flex flex-col gap-3">
                            <h2 className="text-2xl font-semibold capitalize">Add idea</h2>
                            <div className="flex flex-col justify-between gap-2">
                                <div className="flex flex-col justify-between gap-2 ">
                                    <label className="font-semibold">Idea:</label>
                                    <input type="text" className="w-2/3 px-1" onChange={event => inputHandler(event, 'name')} value={name} />
                                </div>
                                <div className="flex flex-col justify-between gap-2 ">
                                    <label className="font-semibold">Creator:</label>
                                    <input type="text" className="w-2/3 px-1" onChange={event => inputHandler(event, 'creator')} value={creator} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <label className="font-semibold">Goal:</label>
                                    <input type="number" className="w-1/3 px-1" onChange={event => inputHandler(event, 'goal')} value={goal} />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <label className="font-semibold">Picture:</label>
                                    <input ref={fileInput} type="file" className="" />
                                </div>
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