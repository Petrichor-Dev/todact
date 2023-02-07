import NavigationBar from '../components/NavigationBar'
import BottomNavigation from '../components/bottomNavigation'
import HomeMain from '../components/homeMain'

import NoteCart from "../components/noteCart";
import TodoCart from "../components/todoCart";

import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';

function todo()
{
  return(
    <>
    <Container className="d-flex text-center align-items-center justify-content-center" style={{height: '25vh'}}>
      <h3>Good Morning <br /> Adam</h3>
    </Container>

    <NavigationBar /> <hr className="mb-5" />
    <Container className="mt-4">
      <Tabs
      defaultActiveKey="note"
      id="uncontrolled-tab-example"
      className="mb-3">
        <Tab eventKey="note" title="category 1">
          <Container>
            <Row className="mt-4">
              <Col><TodoCart /></Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="todo" title="category 2">
          <Container>
            <Row className="mt-4">
              <Col><TodoCart /></Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </Container>
    <BottomNavigation />
    </>
  );
}

export default todo;
