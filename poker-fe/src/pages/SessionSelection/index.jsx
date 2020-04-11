import React from "react";
import { Row, Col } from "react-bootstrap";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import CreateSessionCard from "components/SessionSelection/CreateSession";

const SessionSelection = () => {
  return (
    <Row className='align-items-center h-100 mt-5'>
      <Col sm='6'>
        <CreateSessionCard />
      </Col>
      <Col sm='6 '>
        <JoinSessionCard />
      </Col>
    </Row>
  );
};

export default SessionSelection;
