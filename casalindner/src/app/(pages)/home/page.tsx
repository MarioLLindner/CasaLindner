"use client"
import { Boton } from '../../componentes/botonPruebaNavegacion/Boton';
import Carrousel from '../../componentes/carrousel/Carrousel'
import { Filtro } from '../../componentes/filtros/Filtro';
import { Footer } from '../../componentes/footer/Footer';
import { Form } from '../../componentes/form/Form';
import { Header2 } from '../../componentes/header/Header2';
import ColorSchemesExample from '../../componentes/navbar/Navbar';
import { CardRubro } from '../../componentes/card/CardRubro';
import { genoudSillaAna } from '../../../../Public/GenoudSillaAna/GenoudSillaAna.js'
import "./Home.css";
import { ContCardProducto } from '../../componentes/card/ContCardProducto';
import ColchonesSommiersAlmohadas from '../../../../Public/ColchonesSommiersAlmohadas/ColchonesSommiersAlmohadas.png'
import Carpa from '../../../../Public/PescaCamping/Carpa.webp'

export default function Home() {
  return (
    <>

      <Header2 />
      {/* Next Page */}
      {/* <Boton url={"../rubros"} nextPage="Rubros"/> */}
      <ColorSchemesExample /> {/* Componente NavBar */}
      <Carrousel />
      <div className='container-Card'>
        <CardRubro CardImg={genoudSillaAna.GenoudSillaAna01} CardName="Sillas" CardRubro="Sillas" />
        <CardRubro CardImg={Carpa} CardName="Camping y Pesca" CardRubro="CampingyPesca" />
        <CardRubro CardImg={ColchonesSommiersAlmohadas} CardName="Colchones/Sommiers/Almohadas" CardRubro="Colchones" />
      </div>
      <ContCardProducto />
      {/*<Filtro />
      <Footer/>
      <Form/>*/}
    </>
  );
} 