import React, { use } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import tasks from "../maps/UnitTwo";
import TaskCard from "../Components/TaskCard";
import { useEffect } from "react";

export default function UnitTwo(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return(
        <>
            <section className="w-full h-auto">
                <Header text="Portafolio de evidencias" subtitle="Unidad 1"/>        
            </section>
            <section className="sticky top-0 z-10 w-full h-auto">
                <Navbar  />
            </section>
            <ul className="w-full h-auto flex flex-wrap justify-center">
                {
                    tasks.map(task=>{
                        return(
                            <TaskCard 
                                key={task.id} 
                                title={task.title}
                                description={task.description}
                                img={task.img}
                                PDF={task.PDF}
                            />
                        )
                    })
                }
            </ul>
            <header className="w-full h-auto flex justify-center items-center bg-black text-white p-4 text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                <h3>Conclución de la segunda unidad</h3>
            </header>
            <main className="p-8 text-xl md:text-2xl lg:text-3xl text-justify ">
                <div className="shadow-2xl border-0.2 border-neutral-950 p-6 md:m-6 rounded-lg">
                    <p>
                    
                    </p>
                </div>
                
            </main>
        </>
    )
}