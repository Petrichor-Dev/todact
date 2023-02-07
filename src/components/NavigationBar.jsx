import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink} from "react-router-dom";

// material icon
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" variant="light" sticky="top" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>

            <Nav className="d-felx flex-row me-auto" >
              <NavLink className="btn" style={{textDecoration: 'none', color: 'gray', fontSize: '20px'}} to="/note">Note</NavLink>
              <NavLink className=" btn" style={{textDecoration: 'none', color: 'gray', fontSize: '20px'}} to="/todo">Todo</NavLink>
            </Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/profile-setting" style={{ textDecoration: 'none', color: 'black'}}><AccountCircleOutlinedIcon/> Profile</NavLink>
                  <hr />
                  <NavLink to="/signin" style={{ textDecoration: 'none', color: 'black'}}><LogoutRoundedIcon /> Signin</NavLink>
                  <hr />
                  <NavLink to="/aboutme" style={{ textDecoration: 'none', color: 'black'}}><InfoOutlinedIcon/> About Me</NavLink>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
