"use client"
import { Btn } from "../../componentes/botonPruebaNavegacion/button";
import "./Home.css";

export default function Home() {
  return (
    <>   
    {/* Next Page */}
    <Btn url={"../rubros"} nextPage="Rubros"/>  
    </>
  );
} 