import React, { use } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import tasks from "../maps/UnitTwo";
import TaskCardMobile from "../Components/TaskCardMobile";
import TaskCardDesktop from "../Components/TaskCardDesktop";
import { useEffect } from "react";

export default function UnitTwo(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return(
        <>
            <section className="w-full h-auto">
                <Header text="Portafolio de evidencias" subtitle="Unidad 2"/>        
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
                    tasks.map(task=>{
                        return(
                            <TaskCardDesktop
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
            <header className="bg-gray-950 w-full h-auto flex justify-center items-center sticky top-18 z-10 text-white p-4 text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                <h3>Conclusión de la segunda unidad</h3>
            </header>
            <main className="p-8 text-xl md:text-2xl lg:text-3xl md:text-justify ">
                <div className="shadow-2xl shadow-neutral-600 border-0.2 border-neutral-950 lg:p-20 p-6 md:m-6 rounded-lg">
                    <p>
                        Respecto a esta segunda unidad se profundizo más a detalle como es el funcionamiento de los procesos e hilos dentro
                        de nuestros sistemas operativos ya que varias actividades se contemplo el uso de hilos en lenguajes de programación. <br />
                        Como consecuencia de estos temas tambien se trataron los problemas que ocurren cuando varios procesos quieren acceder
                        a informacion ya sea variables o zonas criticas donde puede existir diversos problemas como la exclusión mutua, la inanicion 
                        y problemas diversos de concurrencia, me gusto y me resulto interesante buscar y aprender los mecanismos que existen y
                        podemos implementar.
                    </p>
                </div>
                
            </main>
        </>
    )
}