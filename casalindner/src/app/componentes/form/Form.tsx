import './Form.css'
import * as React from "react"

import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap"


const FormSesion = ({ data }) => (
  <div className="contenedorInicioSesion">
    <Form className="rounded" style={{ borderRadius: 4, padding: 4 }}>
      <FormGroup style={{ marginBottom: 3 }} controlId="fromBasicEmail">
        <FormLabel> Correo Electronico</FormLabel>
        <FormControl type="email" placeholder="Ingrese Email" />
        <FormText className="text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </FormText>
      </FormGroup>

      <FormGroup style={{marginBottom:"3"}} controlId='formBasicPassword'>
        <FormLabel>Contraseña</FormLabel>
        <FormControl type='password' placeholder='Contraseña'/>
      </FormGroup>

      <FormGroup style={{marginBottom:"3"}} controlId='formBasicCheckBox'>
        <FormCheck type='checkbox' label="Recordarme"/>
      </FormGroup>
      <Button variant='primary' type='submit'>
        Ingresar
      </Button>
    </Form>
  </div>
)



export default FormSesion 