function ItemToBack({ item, setApproval, setDeleteThing }) {

    return (
        <li className="border-b-4 py-1">
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-xl'>Name: {item.name}</div>
                <div className=''>Creator: {item.creator}</div>
                <div className=''>Goal: {item.goal}</div>
                <div className=''>Collected: {item.collected}</div>
                <div className=''>Need: {item.needed > 0 ? item.need : 0}</div>
                <div className=''>Reached: {item.reached ? 'Yes' : 'No'}</div>
                <img src={item.picture} alt="" />
            </div>
            <div className="flex gap-2 mb-4 mt-4">
                <button className='bg-blue-500 hover:bg-blue-600 text-red-50 text-sm text-center px-2 py-1 rounded w-20' onClick={() => setApproval({ main_id: item.main_id, approval: item.approval ? 0 : 1 })}>{item.approval ? 'Approved' : 'Approve'}</button>
                <button className='bg-red-500 hover:bg-red-600 text-red-50 text-sm rounded flex justify-center items-center p-1' onClick={() => setDeleteThing({ main_id: item.main_id })}>Delete</button>
            </div>
        </li>
    )
}

export default ItemToBack;