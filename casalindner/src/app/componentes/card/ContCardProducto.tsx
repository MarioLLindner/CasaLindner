import React from 'react';
import "./CardProducto.css";
import CardProducto from './CardProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ContCardProducto ( props: any ) {
    const {
        CardImg,
        CardName,
        CardDescripcion,
        CardPrecio,
        CardColores,
        CardStock,
        CardDetalles,
        CardRubro
    } = props;
    return (

    <div className="containerCard">
      <div className="row">
        <CardProducto
          title={CardName}
          images={CardImg}
          old_price="9,999"
          newPrice={CardPrecio}
          dollar="$"
          alt=""
          exp_date="10-08-2022"
        />
      </div>
    </div>
  );
}







