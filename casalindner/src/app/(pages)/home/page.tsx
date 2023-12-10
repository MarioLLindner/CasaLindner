"use client"
import { Boton } from '../../componentes/botonPruebaNavegacion/Boton';
import { Buscador} from '../../componentes/buscador/Buscador';
import { Card } from '../../componentes/card/Card';
import { Carrousel } from '../../componentes/carrousel/Carrousel'
import { Filtro } from '../../componentes/filtros/Filtro';
import { Footer } from '../../componentes/footer/Footer';
import { Form } from '../../componentes/form/Form';
import { Header } from '../../componentes/header/Header';
import { Navbar } from '../../componentes/navbar/Navbar';



import "./Home.css";

export default function Home() {
  return (
    <>
      
      <Header />
      {/* Next Page */}
      <Boton url={"../rubros"} nextPage="Rubros"/>
      <Buscador />
      <Card />
      <Carrousel />
      <Filtro />
      <Footer />
      <Form />
      <Navbar />
    </>
  );
} 