import actividad8 from "../assets/actividad8.png"
import actividad9 from "../assets/actividad9.png"
import actividad10 from "../assets/actividad10.png"
import actividad11 from "../assets/actividad11.png"
const tasks = [
    {
        id:0,
        title: "Conociendo los procesos, hilos y su entorno",
        description: "En esta actividad en parejas se realizó una investigación de los procesos y todo lo relacionado a procesos que existen en el sistema operativo",
        PDF:"https://drive.google.com/file/d/1yZi03pRC3wUYCR8f6CExwILhCX5t2jkZ/view?usp=drive_link",
        img: actividad8
    },
    {
        id:1,
        title: "Concurrencia, exclusión mutua, sincronización y problemas de control",
        description:"Esta actividad se baso en leer un libro sobre estos temas y de ellos sacar conceptos relacionados, además de generar aportes a un foro",
        PDF:"https://drive.google.com/file/d/1VhSRpqPrayojBJiExzRyfUla0ekW_6F_/view?usp=drive_link",
        img: actividad9
    },
    {
        id:2,
        title:"Exclusión mutua",
        description:"En esta actividad profundizamos más sobre los temas anteriores, con un enfoque más relacionado a la exclusión mutua y sobre cada una de las formas en que podemos lidiar con diversos casos, con el objetivo de asegurar la integridad de los datos.",
        PDF:"https://drive.google.com/file/d/1NnrzmFG3PQXSbdagdG0lpWgeh_5yn9S3/view?usp=drive_link",
        img: actividad10
    },
    {
        id:3,
        title:"Producto-Consumidor",
        description:"En esta actividad se presentó un programa donde el productor genera datos y el consumidor los utiliza, pero ambos deben trabajar sobre un espacio compartido sin provocar errores ni interferencias.",
        PDF:"https://drive.google.com/file/d/1YZCRxJCn5d6QrbQe1M0PA1MyGp2khKlF/view?usp=drive_link",
        img: actividad11
    }
]


export default tasks;