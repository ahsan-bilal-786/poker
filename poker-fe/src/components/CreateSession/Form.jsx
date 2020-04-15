import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import * as API from "api";

const CreateSessionForm = ({
  history,
  sessionId,
  setUserName,
  setSessionName,
  pollType,
}) => {
  const [sessionName, handleSessionName] = useState("");
  const [userName, handleUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (sessionName !== "" && userName !== "") {
      setUserName(userName);
      setSessionName(sessionName);
      API.createSession(userName, sessionName, sessionId, pollType);
      history.push(`/polling/${sessionId}`);
    }
  };

  return (
    <Card className='text-center '>
      <Card.Header as='h5'>Start New Session</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Session Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='sessionName'
              placeholder='Enter Session name'
              className='text-center'
              value={sessionName}
              onChange={(event) => handleSessionName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='userName'
              placeholder='Enter your name'
              className='text-center'
              value={userName}
              onChange={(event) => handleUserName(event.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Join
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default CreateSessionForm;
