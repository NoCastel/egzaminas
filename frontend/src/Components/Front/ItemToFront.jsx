import { useState } from "react";

function ItemToFront({ item, unit }) {
    // function ItemToFront({ item, unit, setModalData }) {

    // const giveModalData = () => {
    //     setModalData({ unit })
    // }
    return (
        <div>
            <div className="bg-sky-200 p-5 flex flex-col md:flex-row gap-3 rounded-t border-b-2">
                <div className="h-fit w-full p-3 bg-gray-50 rounded">
                    <div className="text-xl font-semibold">Book: {unit.unit}</div>
                    <div className="">Category: <span className="capitalize">{['drama', 'comedy', 'horror', 'novel', 'family'][unit.category - 1]}</span></div>
                    <div className="">User: {item ? item.name : 'Available'}</div>
                    {/* <button type="button" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-50 text-center py-1 px-2 rounded mt-2" onClick={giveModalData}>More</button> */}
                </div>
            </div>
        </div >
    )
}

export default ItemToFront;