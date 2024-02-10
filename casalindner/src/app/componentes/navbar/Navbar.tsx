import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SelectIdiomaHeader } from '../header/selectIdiomaHeader/SelectIdiomaHeader';
import { SelectSearchHeader } from '../header/buscador/selectSearch';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" style={{ height: 40}}>
        <Container style={{ height: 40}}>

          <div style={{height: 40,display:'flex', alignItems:'center'}}>
            <Navbar.Brand href="#Todo">
              <div>
                <SelectIdiomaHeader />
              </div>
            </Navbar.Brand>
          </div>


          <Nav style={{ height: 40, display: 'flex', alignItems: 'center'}}>
            <div className='Search-Header'>
              <SelectSearchHeader />
            </div>
          </Nav>


          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Nav className="me-auto" >
              <Nav.Link href="#Ofertas">Iniciar Sesion</Nav.Link>
              <Nav.Link href="#Comprar de Nuevo">Registrarse</Nav.Link>
              <Nav.Link href="#Servicio al Cliente">Mis Compras</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
