"use client"
import FormSesion from "../../componentes/form/Form";
import ColorSchemesExample from "../../componentes/navbar/Navbar";
import './InicioSesion.css';

export default function InicioSesion() {
    return (
        <>
        <ColorSchemesExample />
            <div className="inicioSesion">
                <FormSesion />
            </div>
        </>
    )
}