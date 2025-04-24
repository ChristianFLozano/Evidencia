import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { motion } from "motion/react";
import { useEffect } from "react";
export default function Presentation() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return ( 
    <>
        <section className="w-full h-auto">
            <Header text="Portafolio de evidencias" subtitle="Introducción"/>
        </section>
        <section className="sticky top-0 z-10 w-full h-auto">
            <Navbar  />
        </section>
        <main className="w-screen h-auto bg-[#fff] flex justify-center">
            <motion.div className=" w-10/12  h-8/12 p-5 mt-14 border-2 border-gray-300 rounded-2xl shadow-2xl mb-5"
            whileHover={{ scale: 1.05 }}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}
            >
                <h3 className="text-md md:text-2xl sm:text-xl " >
                    En esta pagina se presentara el portafolio de evidencias con las actividades realizadas a lo largo del semestre. <br />
                    Cada actividad sera presentada en forma de PDF correspondiente a su unidad temática, estas presentaciones serán en forma 
                    cronológica de la actividad 1 hasta la ultima, en la parte superior se localiza una barra de navegación la cual ayudara
                    a desplazarse entre las unidades.
                </h3>
                <hr />
                <br />
                <h2 className="text-lg md:text-3xl sm:text-2xl font-bold">
                    Unidad 1. Instalacion de sistemas operativos
                </h2>
                <h3 className="text-md md:text-2xl sm:text-xl " >
                En esta primera unidad se vieron los temas relacionados con las instalaciones de sistemas operativos, como puede ser el simple
                    uso de las memorias booteables, los tipos de sistemas operativos deonde se engloban temas como licencias, distrinuciones e arquitectura
                    así como maquinas virtuales y la instalación de diversos sistemas operativos dentro de ellas.
                </h3>
                <br />
                <h2 className="text-lg md:text-3xl sm:text-2xl font-bold">
                    Unidad 2. Configuración de Servicios
                </h2>
                <h3 className="text-md md:text-2xl sm:text-xl " >
                En esta segunda unidad se vieron los temas relacionados con la exclusion mutua, concurrencia, sincronización
                y problemas de control que ocurren en nuestro sistema operativo y como se solucionan asi como nosotros tuvimos
                tuvimos que conocerlos y resolver dos problemas (producto-consumidor y filosofos)
                </h3>

            </motion.div>
        </main>
    </>
    
    );
}