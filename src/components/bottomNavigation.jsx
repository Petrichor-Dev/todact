import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

// material icon
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

function bottomNavigation()
{
    const link = 'link';
    return(
      <Navbar bg="dark" variant="dark" fixed="bottom" style={{ marginBottom: "-35px" }}>
        <Container>
          <Nav className="mx-auto mt-2">
              <div className="mx-3">
                <NavLink to="/" style={{ textDecoration: 'none', color: 'gray'}} className="text-center mx-5">
                  <HomeRoundedIcon />
                  <p>Home</p>
                </NavLink>
              </div>

              <div className="mx-3" >
                <NavLink to={link} style={{ textDecoration: 'none', color: 'gray'}} className="text-center mx-5">
                  <ModeEditOutlineRoundedIcon />
                  <p>Add New</p>
                </NavLink>
              </div>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default bottomNavigation;
