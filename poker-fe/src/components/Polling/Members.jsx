import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const MembersList = () => {
  return (
    <Card>
      <Card.Header as='h5' className='text-center'>
        Members
      </Card.Header>
      <Card.Body className='p-0'>
        <ListGroup variant='flush'>
          <ListGroup.Item>Alecia</ListGroup.Item>
          <ListGroup.Item>Alfie</ListGroup.Item>
          <ListGroup.Item>Ahsan</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MembersList;
