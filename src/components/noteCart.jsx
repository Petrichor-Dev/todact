import {Card} from "react-bootstrap";

function noteCart()
{
    return(
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className=" text-muted"></Card.Subtitle>
          <hr />
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default noteCart;
