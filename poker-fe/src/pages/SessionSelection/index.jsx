import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setPollType,
  setsessionUuId,
  fetchPollTypesListAction,
} from "store/actions/polling";
import { Row, Col } from "react-bootstrap";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import CreateSessionCard from "components/SessionSelection/CreateSession";

const SessionSelection = ({
  history,
  setPollType,
  setsessionUuId,
  fetchPollTypesList,
  pollTypesList,
}) => {
  useEffect(() => {
    fetchPollTypesList();
  }, [fetchPollTypesList]);
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6">
        <CreateSessionCard
          history={history}
          setPollType={setPollType}
          setsessionUuId={setsessionUuId}
          pollTypesList={pollTypesList}
        />
      </Col>
      <Col sm="6 ">
        <JoinSessionCard history={history} setsessionUuId={setsessionUuId} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    pollTypesList: state.polling.pollTypesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPollType: (pollType) => dispatch(setPollType(pollType)),
    setsessionUuId: (sessionUuId) => dispatch(setsessionUuId(sessionUuId)),
    fetchPollTypesList: () => dispatch(fetchPollTypesListAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionSelection);
