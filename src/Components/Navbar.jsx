import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <>
            <nav className="w-full h-auto flex flex-wrap justify-evenly p-4 bg-linear-to-b
                from-black to-slate-900 from-5% shadow-lg">
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
                <NavLink
                    className={`text-white text-lg md:text-2xl sm:text-xl font-bold p-2 hover:text-gray-300 transition-colors duration-300 ${location.pathname === '/unidaddos' ? 'underline' : ''}`}
                    to="/unidaddos"
                    end
                >
                    Unidad 2
                </NavLink>
            </nav>
        </>
    );
}