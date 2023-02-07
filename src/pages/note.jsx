import NavigationBar from '../components/NavigationBar'
import BottomNavigation from '../components/bottomNavigation'

import DetailNote from "./detailNote";

import NoteCart from "../components/noteCart";
import TodoCart from "../components/todoCart";

import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';

import {NavLink} from "react-router-dom";

function note()
{
  return(
    <>
    <Container className="d-flex text-center align-items-center justify-content-center" style={{height: '25vh'}}>
      <h3>Good Morning <br /> Adam</h3>
    </Container>
      <NavigationBar /><hr className="mb-5" />
      <Container>
        <Row>
          <Col xs={6}>
            <NavLink style={{textDecoration:'none', color:'black'}} to='/note/:id'>
              <NoteCart />
            </NavLink>
          </Col>
          <Col className="" xs={6}>
            <NavLink style={{textDecoration:'none', color:'black'}} to='/note/:id'>
              <NoteCart />
            </NavLink>
          </Col>
        </Row>
      </Container>
      <BottomNavigation />
    </>
  );
}

export default note;
