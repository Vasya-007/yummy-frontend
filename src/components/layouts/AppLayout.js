import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import paths from '../../router/paths';

export default function AppLayout({ children, logout }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to={paths.home}>
          Yummy (app)
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
