import NoteCart from "../components/noteCart";
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar'
import BottomNavigation from '../components/bottomNavigation'
import {NavLink} from "react-router-dom";

function detailNote()
{
  return(
    <>
      <NavigationBar />
      <Container>
        <Row className="">
          <Col className="">
            <NavLink style={{textDecoration:'none', color:'black'}} to='/note/:id'>
              <NoteCart />
            </NavLink>
          </Col>
        </Row>
      </Container>
      <BottomNavigation />
    </>
  )
}

export default detailNote;
