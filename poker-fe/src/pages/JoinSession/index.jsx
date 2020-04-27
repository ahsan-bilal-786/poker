import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  setUserName,
  setSessionName,
  setPollType,
  setsessionByUuIdAction,
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
  setsessionByUuId,
  setUserName,
  setSessionName,
  setPollType,
}) => {
  useEffect(() => {
    setsessionByUuId(match.params.sessionUuId);
  }, [match.params.sessionUuId, setsessionByUuId]);
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
    setSessionName: (sessionName) => dispatch(setSessionName(sessionName)),
    setsessionByUuId: (sessionUuId) =>
      dispatch(setsessionByUuIdAction(sessionUuId)),
    setPollType: (pollType) => dispatch(setPollType(pollType)),
  };
};

export default connect(null, mapDispatchToProps)(JoinSession);
