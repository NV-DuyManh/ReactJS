import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';

function Todolist(props) {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);

    return (
        <div>
            <h1 className='flex justify-center items-center font-bold mt-4'>To Do List</h1>

            <div className="add flex justify-center items-center mt-4 gap-4">
                <input className='border border-gray-300 h-10 rounded-full px-4' type="text" />
                <button className='bg-green-600 w-20 h-10 rounded-full hover:bg-blue-500 hover:text-white'>ADD</button>
            </div>

            <div className="bang flex justify-center mt-6 px-10">
                <table className="w-full table-fixed border-separate border-spacing-y-2">
                    <tr className="bg-black text-white">
                        <td className="p-3 text-left rounded-l-md">1</td>
                        <td className="p-3 text-center">Gà Rán</td>
                        <td className="p-3 text-right rounded-r-md">
                            <button className="bg-blue-500 px-3 py-1 rounded mr-2">Edit</button>
                            <button className="bg-red-600 px-3 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                    <tr className="bg-black text-white">
                        <td className="p-3 text-left rounded-l-md">2</td>
                        <td className="p-3 text-center">Khoai Tây Chiên</td>
                        <td className="p-3 text-right rounded-r-md">
                            <button className="bg-blue-500 px-3 py-1 rounded mr-2">Edit</button>
                            <button className="bg-red-600 px-3 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                    <tr className="bg-black text-white">
                        <td className="p-3 text-left rounded-l-md">3</td>
                        <td className="p-3 text-center">Nước Ngọt</td>
                        <td className="p-3 text-right rounded-r-md">
                            <button className="bg-blue-500 px-3 py-1 rounded mr-2">Edit</button>
                            <button className="bg-red-600 px-3 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>

            {/* <h1 className='flex justify-center gap-2 items-center text-2xl mt-10'>{count} <FaLightbulb className={status ? 'text-yellow-500' : ""} /></h1>
            <div className='flex justify-center gap-2 text-white mb-10'>
                <button onClick={() => setCount(count - 1)} className='bg-green-700 p-3 rounded'>--</button>
                <button onClick={() => setCount(count + 1)} className='bg-green-700 p-3 rounded'>++</button>
                <button onClick={() => setStatus(!status)} className='bg-green-700 p-3 rounded'>{status ? "Close" : "Open"}</button>
            </div> */}
        </div>
    );
}

export default Todolist;