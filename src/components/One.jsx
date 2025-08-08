import React from 'react'
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

const One = ({heading}) => {
  return (
            <div className="flex items-center justify-between ">
                <div className="flex items-center font-medium cursor-pointer">
                 <h2 className="text-xl">
                    {heading}
                </h2>
                 <button className="h-7 mt-0.5">
                    <MdOutlineNavigateNext className="h-full w-fit cursor-pointer " />
                 </button>
                </div>
                        {/* === Side Button === */}
                <div className="flex items-center gap-0.5">
                <button><MdOutlineNavigateBefore className="h-6 w-auto border border-gray-300 rounded-full cursor-pointer hover:scale-110  " /> </button>

                <button><MdOutlineNavigateNext className="h-6 w-auto border border-gray-300 rounded-full cursor-pointer hover:scale-110  " /></button>
                </div>

            </div>
  )
}

export default One
