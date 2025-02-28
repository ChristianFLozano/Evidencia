import React from "react";

export default function Header(props) {

    return (
    <>
        <header className="bg-[#1B2763] text-white text-center p-4 w-full h-38 md:h-40 lg:h-56">
            <div className="w-full h-full bg-gradient-to-bl from-blue-900 to-[#081452] flex items-center justify-center flex-col">
                <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">{props.text}</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-3">{props.subtitle}</h2>
            </div>
        </header>
    </>
    );
}