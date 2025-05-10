import React from "react"
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import tasks from "../maps/UnitThree";
import TaskCardMobile from "../Components/TaskCardMobile";
import TaskCardDesktop from "../Components/TaskCardDesktop";
import { useEffect } from "react";

export default function UnitThree(){
    
    useEffect(()=>{
            window.scrollTo(0, 0);
        })

    return(
        <>
            <section className="w-full h-auto">
                <Header text="Portafolio de evidencias" subtitle="Unidad 3"/>        
            </section>
            <section className="sticky top-0 z-10 w-full h-auto">
                <Navbar  />
            </section>
            <ul className="w-full h-auto flex flex-wrap justify-center lg:hidden">
                {
                    tasks.map(task=>{
                        return(
                            <TaskCardMobile
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
            <ul className="w-full h-auto lg:flex flex-wrap justify-center hidden">
                {
                    tasks.map(task=>(
                        <TaskCardDesktop
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            img={task.img}
                            PDF={task.PDF} />
                    ))
                }
            </ul>
            <header className="bg-gray-950 w-full h-auto flex justify-center items-center sticky top-18 z-10 text-white p-4 text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                <h3>Conclusión de la tercera unidad</h3>
            </header>
            <main className="p-8 text-xl md:text-2xl lg:text-3xl md:text-justify ">
                <div className="shadow-2xl shadow-neutral-600 border-0.2 border-neutral-950 lg:p-20 p-6 md:m-6 rounded-lg">
                    <p>
                    En esta última unidad tratamos un poco de los temas finales, pero igual de interesantes ya que con
                    una actividad reforzamos lo que trato la segunda unidad, así como tampoco dejar de un lado la 
                    importancia de la seguridad y como esta juega un factor clave en nuestros días. 
                    <br />
                    Creo que fue un gran cierre de este semestre además de fortalecer pensamientos y conocimientos 
                    sobre todo lo que engloba un sistema operativo.
                    </p>
                </div>
                
            </main>
        </>
    )
}