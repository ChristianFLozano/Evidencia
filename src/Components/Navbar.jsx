import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav className="w-full h-auto flex flex-wrap justify-evenly p-4 bg-black shadow-lg mb-5">
                <NavLink
                    className={`text-white text-lg md:text-2xl sm:text-xl font-bold p-2 hover:text-gray-300 transition-colors duration-300 ${location.pathname === '/' ? 'underline' : ''}`}
                    to='/'
                    end
                >
                    Introducción
                </NavLink>

                <NavLink
                    className={`text-white text-lg md:text-2xl sm:text-xl font-bold p-2 hover:text-gray-300 transition-colors duration-300 ${location.pathname === '/unidaduno' ? 'underline' : ''}`}
                    to="/unidaduno"
                    end
                >
                    Unidad 1
                </NavLink>
            </nav>
        </>
    );
}