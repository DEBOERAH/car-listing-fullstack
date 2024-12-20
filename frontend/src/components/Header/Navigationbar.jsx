import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar() {
  return (
    <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">CarBay🚗</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allcars">Cars</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
            <NavDropdown title="more" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/addcar">Add car</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
            my favourite
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
            Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/Login">
            login
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;