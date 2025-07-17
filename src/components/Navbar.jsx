import React from "react";
import twitch from "../assets/twitch.png"
import Steam from "../assets/steam.png"
import yt from "../assets/yt.png"
import fab from "../assets/Fab.png"
import lupa2 from "../assets/lupa2.webp"

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className="text-white text-xl font-bold">
                    LOGO LPG
                </a>
                <div className="translate-x-[-100px] flex flex-row gap-5">
                        <a href="#">
                            <img src={twitch} alt="twitch" />
                        </a>
                        <a href="#">
                            <img src={Steam} alt="steam" />
                        </a>
                        <a href="#">
                            <img src={yt} alt="yt" />
                        </a>
                        <a href="#">
                            <img src={fab} alt="fab" />
                        </a>
                </div>
                <div className="space-x-2 flex flex-row">
                    <input id="email-address" name="email" type="email" autoComplete="email" required
                           className="min-w-0 flex-auto rounded-md bg-gray-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                           placeholder="Search"/>
                    <button className="bg-gray-600 border-black hover:border-white py-2 text-white font-bold border-2  rounded-xl p-2">
                        <img src={lupa2} alt="lupa2"/>
                    </button>

                </div>

                <div className="space-x-4">
                    <a href="#" className="text-white hover:text-gray-400 font-mono text-2xl font-bold ">
                        STORE
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;