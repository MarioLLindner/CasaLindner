import React from "react";
import { CCard, CCardImage, CCardBody, CCardTitle,CCardText, CButton } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'

export function CardRubro ( props: any ) {
    const {
        CardImg,
        CardName,
       /*  CardRubro */
    } = props;
    return (
        <CCard style={{ width: '18rem', margin: '15px' }}>
            <CCardImage orientation="top" src={CardImg.src}/>
            <CCardBody>
                <CCardTitle>{CardName}</CCardTitle>
                {/* <CCardText>
                    {CardRubro}
                </CCardText> */}
                <CButton href="#">Ver Mas</CButton>
            </CCardBody>
        </CCard>
    )
}