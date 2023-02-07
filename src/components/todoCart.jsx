import {Button, Form, Card} from 'react-bootstrap';

function todoCart() {
  return (
    <Card>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className=" text-muted"></Card.Subtitle>

        <Card.Text>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Makan di warteg teh yuli" />
            <Form.Check type="checkbox" label="Pinjem duit si Jhon" />
            <Form.Check type="checkbox" label="Nongki bareng anak kampung sebelah" />
            <Form.Check type="checkbox" label="Pesen mcd" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Action
          </Button>
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default todoCart;
