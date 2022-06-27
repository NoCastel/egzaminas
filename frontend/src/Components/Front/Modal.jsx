import { useState } from "react";

function Modal({ modalData, setModalData }) {
	if (modalData === null) { return null; }
	return (
		<div className="flex justify-center h-screen items-center bg-gray-300 antialiased fixed z-50  inset-0">
			<div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
				<div className="p-6 bg-gray-100 border-b border-gray-300 rounded-tl-lg rounded-tr-lg">
					<p className="text-xl font-semibold text-gray-800">Information</p>
				</div>
				<div className="flex flex-col px-6 py-5 bg-gray-50 gap-2">
					<div className="flex flex-col md:flex-row md:items-center gap-2">
						<p className="font-semibold text-gray-700">Name:</p>
						<div className="w-2/3 md:w-2/3 px-2 py-1">{modalData.unit}</div>
					</div>
					<div className="flex flex-col justify-between">
						<div className="w-2/3  px-2 py-1 flex flex-wrap flex-col gap-4">
							{/* Taken by{modalData ? modalData.name : 'Available'} */}
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center justify-between p-5 bg-gray-100 border-t border-gray-300 rounded-bl-lg rounded-br-lg dark:focus:ring-red-600">
					<p type="button" className="font-semibold text-gray-600 cursor-pointer" onClick={() => setModalData(null)}>Cancel</p>
				</div>
			</div>
		</div>
	)
}

export default Modal;