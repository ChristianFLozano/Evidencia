import React from "react";
import { motion } from "motion/react";
export default function TaskCardDesktop({title, description, PDF, img}){

    return(
        <>
        
        <motion.li className="w-2/5 h-auto bg-white shadow-2xl shadow-neutral-600 rounded-lg overflow-hidden m-2 grid
        grid-cols-2 grid-rows-[auto_1fr] "
        whileInView={{x: [-100, 0], y: [20, 0], opacity: [0, 1], transition: {duration: 1.2}}}
        viewport={{once: true}}
        >
            <div className="col-span-2 p-5">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            </div>
            <p className="text-lg md:text-xl  p-5">{description}</p>
            <img src={img} alt={title} className="col-span-1 w-full h-auto object-cover self-start" />
            <div className="col-span-1 p-6">
                <a href={PDF} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Ver PDF</a>
            </div>

        </motion.li>
        
        </>
    )
}