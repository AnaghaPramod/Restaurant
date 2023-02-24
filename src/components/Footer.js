import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className="text-center bg-black text-light">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Kochi</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Copyright © 2018 Tonico Cafe. All Rights Reserved </Card.Footer>
  </Card>
  </div>
  )
}

export default Footer