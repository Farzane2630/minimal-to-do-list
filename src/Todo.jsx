import React from 'react'

export default function Todo({ value, status, isCompleted, deleteTaskHandler, changeStatus }) {

   return (
      <div
         className='flex flex-row items-center justify-center mb-3 hover:cursor-pointer'>
         <div
            className={`input-wrapper flex justify-center items-center text-white border-0 rounded-full font-semibold bg-slate-400 text-white h-10 w-1/2 px-5  ${status === "Completed" ? "line-through text-black decoration-inherit" : ""}`}
            onClick={changeStatus}
         >
            {value}
         </div>
         <button onClick={() => deleteTaskHandler()}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="40"
               height="40"
               fill="#880202"
               stroke="#880202"
               viewBox="0 0 24 24"
            >
               <path d="M5.755 20.283L4 8h16l-1.755 12.283A2 2 0 0116.265 22h-8.53a2 2 0 01-1.98-1.717zM21 4h-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v1H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
            </svg>
         </button>
      </div>
   )
}
