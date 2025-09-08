import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Bai3() {
  return (
    <div className='flex gap-3'>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th/id/OIP.UVP9-I4sgxg7cj9IT1PRpQHaEK?pid=Api&P=0&h=180"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th/id/OIP.UVP9-I4sgxg7cj9IT1PRpQHaEK?pid=Api&P=0&h=180"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
