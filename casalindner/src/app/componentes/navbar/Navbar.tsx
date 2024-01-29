import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Todo">☰ Todo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#Comprar de Nuevo">Comprar de Nuevo</Nav.Link>
            <Nav.Link href="#Servicio al Cliente">Servicio al Cliente</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;
