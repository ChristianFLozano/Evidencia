import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import tasks from "../maps/UnitTwo";
import TaskCard from "../Components/TaskCard";

export default function UnitTwo(){
    return(
        <>
            <section className="w-full h-auto">
                        <Header text="Portafolio de evidencias" subtitle="Unidad 2"/>
                        <Navbar />
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
        </>
    )
}