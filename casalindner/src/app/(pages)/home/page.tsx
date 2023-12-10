"use client"
import { Btn } from '../../componentes/botonPruebaNavegacion/Button';
import { Buscador } from '../../componentes/buscador/Buscador';
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
      {/* Next Page */}
      <Btn url={"../rubros"} nextPage="Rubros" />
      <Buscador />
      <Card />
      <Carrousel />
      <Filtro />
      <Footer />
      <Form />
      <Header />
      <Navbar />
    </>
  );
} 