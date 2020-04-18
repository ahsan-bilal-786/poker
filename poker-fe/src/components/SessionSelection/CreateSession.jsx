import React, { Component } from "react";
import uuid from "uuid/v4";
import { Card, Button, Form } from "react-bootstrap";

class CreateSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollType: "fibnocci",
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      pollType: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const sessionId = uuid();
    this.props.setPollType(this.state.pollType);
    this.props.setSessionId(sessionId);
    this.props.history.push(`/create-session/${sessionId}`);
  };

  render() {
    const { pollType } = this.state;
    return (
      <Card className="text-center">
        <Card.Header as="h5">Create Session</Card.Header>
        <Card.Body>
          <div className="d-block mb-2">
            <img
              src="http://via.placeholder.com/200x200/72448d"
              alt="create session"
            />
          </div>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="sessionId">
              <Form.Control
                as="select"
                onChange={this.onChange}
                value={pollType}
              >
                <option value="fibnocci">Fibonacci</option>
                <option value="t-shirt">T-Shirt</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
export default CreateSessionCard;