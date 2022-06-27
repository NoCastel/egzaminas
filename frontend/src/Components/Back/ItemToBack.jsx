function ItemToBack({ item, setDeleteItem }) {
    return (
        <li className="border-b-4 py-1">
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-xl'>Name: {item.name}</div>
            </div>
            <div className="flex gap-2 mb-4 mt-4">
                <button className='bg-red-500 hover:bg-red-600 text-red-50 text-sm rounded flex justify-center items-center p-1' onClick={() => setDeleteItem({ main_id: item.main_id })}>Delete</button>
            </div>
        </li>
    )
}

export default ItemToBack;