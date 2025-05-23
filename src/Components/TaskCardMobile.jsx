import React from "react";
import { motion } from "motion/react";
export default function TaskCard({ title, description, PDF, img }) {
    return (
        <>
            <motion.li className="w-full bg-white shadow-2xl shadow-neutral-600 rounded-lg overflow-hidden m-8 flex flex-col"
                whileInView={{x: [-100, 0],y:[20, 0] , opacity: [0, 1], transition: {duration: 1.2}}}
                viewport={{once: true}}
            >
                <img src={img} alt={title} className="md:w-4/12 h-auto object-cover self-center" />
                <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg md:text-xl mb-4">{description}</p>
                    <a href={PDF} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Ver PDF</a>
                </div>
            </motion.li>
        </>
    );
}