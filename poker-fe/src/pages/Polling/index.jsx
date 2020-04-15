import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { setPolls } from "store/actions/polling";
import * as API from "api";
import PollingLink from "components/Polling/PollingLink";
import Members from "components/Polling/Members";
import SelectedPolls from "components/Polling/SelectedPolls";
import AvailablePolls from "components/Polling/AvailablePolls";
import { useCallback } from "react";

const Polling = ({ pollType, userName, sessionId, sessionName }) => {
  const [polls, handlePolls] = useState([]);

  const handleCardSelection = (card) => {
    API.pollToSession(userName, sessionId, card);
    updatePolls(sessionId);
  };

  const updatePolls = (sessionId) => {
    if (sessionId) {
      const session = API.getSession(sessionId);
      handlePolls(session.polls);
    }
  };

  const fetchPollData = useCallback(() => {
    setTimeout(() => {
      updatePolls(sessionId);
      fetchPollData();
    }, 500);
  }, [sessionId]);

  useEffect(() => {
    if (!(Array.isArray(polls) && polls.length > 0)) fetchPollData();
  });

  const showAllRecords = () => {
    if (Array.isArray(polls) && polls.length > 0) {
      const poll = polls.find((poll) => poll.userName === userName);
      return poll.card !== "" ? true : false;
    }
    return false;
  };

  return (
    <>
      <Row className='justify-content-between h-100 mt-5'>
        <Col sm='4' className='ml-1'>
          <h4 className='pt-2'>{sessionName}</h4>
        </Col>
        <Col sm='4'>
          <PollingLink sessionId={sessionId} />
        </Col>
      </Row>
      <Row className='h-100 mt-2'>
        <Col sm='3'>
          <Members polls={polls} />
        </Col>
        <Col sm='9'>
          <SelectedPolls polls={polls} showCards={showAllRecords()} />
          <AvailablePolls pollType={pollType} setPolls={handleCardSelection} />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  const { pollType, userName, sessionId, polls, sessionName } = state.polling;
  return {
    pollType,
    userName,
    sessionName,
    sessionId,
    polls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPolls: (polls) => dispatch(setPolls(polls)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polling);
