"use client"
import { Btn } from "../../src/app/componentes/botonPruebaNavegacion/Button";
import { Buscador } from "../../src/app/componentes/buscador/Buscador";
import { Card } from "../../src/app/componentes/card/Card";
import { Carrousel } from "../../src/app/componentes/carrousel/Carrousel";
import { Filtro } from "../../src/app/componentes/filtros/Filtro";
import { Footer } from "../../src/app/componentes/footer/Footer";
import { Form } from "../../src/app/componentes/form/Form";
import { Header } from "../../src/app/componentes/header/Header";
import { Navbar } from "../../src/app/componentes/navbar/Navbar";

import "./Home.css";

export default function Home() {
  return (
    <>   
    {/* Next Page */}
    <Btn url={"../rubros"} nextPage="Rubros"/>
    <Buscador/>
    <Card/>
    <Carrousel/>
    <Filtro/>
    <Footer/>
    <Form/>
    <Header/>
    <Navbar/>  
    </>
  );
} 