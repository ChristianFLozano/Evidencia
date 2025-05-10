import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import tasks from "../maps/UnitOne";
import TaskCardMobile from "../Components/TaskCardMobile";
import TaskCardDesktop from "../Components/TaskCardDesktop";
import { useEffect } from "react";

export default function UnitOne() {
    
    
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
            <header className="w-full h-auto flex justify-center items-center bg-black text-white p-4 text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                <h3>Conclución de la primera unidad</h3>
            </header>
            <main className="p-8 text-xl md:text-2xl lg:text-3xl text-justify ">
                <div className="shadow-2xl border-0.2 border-neutral-950 p-6 md:m-6 rounded-lg">
                    <p>
                    Respecto a las actividades de esta primera unidad creo firmemente que nos ayuda a sentar las bases básicas de lo 
                    que es un sistema operativo, como estos se conforman y actividades prácticas que pueden ser de gran utilidad tales 
                    como la actividad de la usb y máquina virtual. <br />
                    Sin olvidarnos de elementos importantes tales como lo que son las licencias y distribuciones de un sistema operativo
                    que son de gran importancia para el uso de estos. <br />
                    Me gusto bastante esta primera unidad ya que existen temas que ya conocía pero no a profundidad y otros que no tenía
                    ni idea de que existían, por lo que me parece que esta unidad fue bastante completa y que nos ayudara a tener una
                    mejor comprensión de los temas que se verán en las siguientes unidades.
                    </p>
                </div>
                
            </main>
        </>
    )
}