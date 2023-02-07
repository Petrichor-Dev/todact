import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';


import NoteCart from "./noteCart";
import TodoCart from "./todoCart";

function homeMain()
{
    return(
      <Container className="mt-2">
        <Tabs
        defaultActiveKey="note"
        id="uncontrolled-tab-example"
        className="mb-3">
          <Tab eventKey="note" title="Note">
            <Container>
              <Row className="mt-3">
                <Col><NoteCart /></Col>
                <Col><NoteCart /></Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="todo" title="ToDo">
            <Container>
              <Row className="mt-3">
                <Col><TodoCart /></Col>
                <Col><TodoCart /></Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    );
}

export default homeMain;
