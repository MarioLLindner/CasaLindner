"use client"
import Carrousel from '../../componentes/carrousel/Carrousel'
import { Filtro } from '../../componentes/filtros/Filtro';
import ColorSchemesExample from '../../componentes/navbar/Navbar';
import { CardRubro } from '../../componentes/card/CardRubro';
import { genoudSillaAna } from '../../../../Public/GenoudSillaAna/GenoudSillaAna.js'
import { ContCardProducto } from '../../componentes/card/ContCardProducto';
import ColchonesSommiersAlmohadas from '../../../../Public/ColchonesSommiersAlmohadas/ColchonesSommiersAlmohadas.png'
import Carpa from '../../../../Public/PescaCamping/Carpa.webp'
import "./Home.css";

export default function Home() {
  return (
    <>
      <ColorSchemesExample /> {/* Componente NavBar */}
      <Carrousel />
      <div className='container-Card'>
        <CardRubro CardImg={genoudSillaAna.GenoudSillaAna01} CardName="Sillas" CardRubro="Sillas" />
        <CardRubro CardImg={Carpa} CardName="Camping y Pesca" CardRubro="CampingyPesca" />
        <CardRubro CardImg={ColchonesSommiersAlmohadas} CardName="Colchones/Sommiers/Almohadas" CardRubro="Colchones" />
      </div>
      <ContCardProducto />
      {/*<Filtro />*/}
    </>
  );
} 