import { Link, Outlet } from "react-router-dom";
import { Container, Navbar, Row, Col, Nav } from "react-bootstrap"

export default function App() {
  return (
    <Container className="full-container p-0" fluid>
      <Navbar className="mt-5 mb-5" id="title-bar">
        <Navbar.Brand className="nav-title w-100"><Link to="/front">Ruins of Uldamar</Link></Navbar.Brand>
        <Nav>
          <Link to="/characterCreation" className="nav-item">Create a character</Link>
          <Link to="/login" className="nav-item">Login</Link>
        </Nav>
      </Navbar>
      <Container fluid="lg" className="text-container">
        <Row>
          <Col lg="3" className="sidebar">
            <div className="profile-pic"></div>
            <h3>Matthias Ironbeard</h3>
          </Col>
          <Col className="text-container p-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
