import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  setUserName,
  setSessionName,
  setPollType,
  setsessionUuId,
} from "store/actions/polling";
import JoinSessionForm from "components/JoinSession/Form";

/**
 * @todo if user refresh the join session page then whole data flush from redux store
 * and the data captured in previous form lost. So to handle this case, we need to store the data
 * in database through backend application.
 *
 */
const JoinSession = ({
  history,
  match,
  setsessionUuId,
  setUserName,
  setSessionName,
  setPollType,
}) => {
  useEffect(() => {
    setsessionUuId(match.params.sessionUuId);
  }, [match.params.sessionUuId, setsessionUuId]);
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <JoinSessionForm
          history={history}
          setUserName={setUserName}
          setSessionName={setSessionName}
          setPollType={setPollType}
          sessionUuId={match.params.sessionUuId}
        />
      </Col>
    </Row>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
    setsessionUuId: (sessionUuId) => dispatch(setsessionUuId(sessionUuId)),
    setSessionName: (sessionName) => dispatch(setSessionName(sessionName)),
    setPollType: (pollType) => dispatch(setPollType(pollType)),
  };
};

export default connect(null, mapDispatchToProps)(JoinSession);
