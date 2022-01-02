import { Link, Outlet } from "react-router-dom";
import { Container, Navbar, Row, Col, Nav } from "react-bootstrap"
import header_bg from "./img/header_bg.jpg"
import player_img from "./img/player_placeholder.jpg"

export default function App() {
  const loggedIn = false
  return (
    <Container className="full-container" fluid>
      <Navbar className="mb-5" id="title-bar" style={{ backgroundImage: `url(${header_bg})` }}>
        <div className="nav-title w-100 lh-2"><Link to="/front">Ruins of Udalmar</Link></div>
        <Nav>
          <Link to="/characterCreation" className="nav-item btn btn-dark">Create a character</Link>
          <Link to="/login" className="nav-item btn btn-dark">Login</Link>
          <Link to={`/story/text/1`} className="nav-item btn btn-dark">Begin story</Link>
        </Nav>
      </Navbar>
      <Container fluid="lg">
        <Row>
          {loggedIn ?
            <Col lg="3" className="sidebar">
              <div class="inner-container">
                <img src={player_img} alt="" className="profile-pic" />
                <h3>Matthias Ironbeard</h3>
              </div>
            </Col> : ""}
          <Col className="text-container">
            <div class="inner-container">
              <Outlet />
            </div></Col>
        </Row>
      </Container>
    </Container>
  );
}
