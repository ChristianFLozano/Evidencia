import React from "react";
import { motion } from "motion/react";
export default function Header(props) {

    return (
    <>
        <header className="bg-[#1B2763] text-white text-center p-4 w-full h-38 md:h-40 lg:h-56">
            <div className="w-full h-full bg-gradient-to-bl from-blue-900 to-[#081452] flex items-center justify-center flex-col">
                <motion.h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.25 }}
                whileHover={{ scale: 1.1 }}
                >{props.text}</motion.h1>

                <motion.h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-3"
                initial={{ y: -150}}
                animate={{ y: 0 }}
                transition={{ duration: 1.25 }}
                whileHover={{ scale: 1.1 }}
                >{props.subtitle}</motion.h2>
            </div>
        </header>
    </>
    );
}