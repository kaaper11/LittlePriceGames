import React from "react";

const Navbar02 = () => {
    return (
        <nav className="bg-amber-600 h-11">
            <div className="container mx-auto flex items-stretch justify-between h-full">
                <div className="flex flex-grow justify-center h-full ">
                    <button className=" h-full hover:bg-blue-500 w-35 text-white font-mono text-xl font-bold">
                        PlayStation
                    </button>
                    <button className=" h-full hover:bg-green-700 w-35 text-white font-mono text-xl font-bold">
                        Xbox
                    </button>
                    <button className=" h-full hover:bg-red-700 w-35 text-white font-mono text-xl font-bold">
                        Switch
                    </button>
                    <button className=" h-full hover:bg-purple-900 w-35 text-white font-mono text-xl font-bold">
                        PC
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar02