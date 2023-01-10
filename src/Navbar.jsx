import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Logout } from "./Logout";

export function Header() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      style={{ backgroundColor: "#313131", height: "100px", width: "125px", position: "absolute", left: "300px" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white", padding: "10px" }}>
              Otaku
            </Nav.Link>
            <NavDropdown title="Account" color="white" id="basic-nav-dropdown">
              <NavDropdown.Item href="/signup" style={{ color: "white" }}>
                Signup
              </NavDropdown.Item>
              <NavDropdown.Item href="/login" style={{ color: "white" }}>
                {" "}
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: "white" }}>
                {" "}
                <Logout />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
