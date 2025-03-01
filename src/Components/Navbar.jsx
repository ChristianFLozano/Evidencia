import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-auto flex flex-wrap justify-evenly p-4 bg-black shadow-lg mb-5">
                <NavLink
                    className="text-white text-lg md:text-2xl sm:text-xl font-bold p-2 hover:text-gray-300 transition-colors duration-300"
                    to='/'
                    end
                >
                    Introducción
                </NavLink>

                <NavLink
                    className="text-white text-lg md:text-2xl sm:text-xl font-bold p-2 hover:text-gray-300 transition-colors duration-300"
                    to="/unidaduno"
                    end
                >
                    Unidad 1
                </NavLink>

                
            </nav>
        </>
    );
}