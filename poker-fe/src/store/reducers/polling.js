import {
  SET_POLL_TYPE,
  SET_SESSION_ID,
  SET_SESSION_NAME,
  SET_USER_NAME,
} from "store/actions/types";

const initialState = {
  pollType: null,
  sessionId: null,
  sessionName: null,
  userName: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL_TYPE:
      state = { ...state, pollType: action.pollType };
      break;
    case SET_SESSION_ID:
      state = { ...state, sessionId: action.sessionId };
      break;
    case SET_SESSION_NAME:
      state = { ...state, sessionName: action.sessionName };
      break;
    case SET_USER_NAME:
      state = { ...state, userName: action.userName };
      break;
    default:
  }
  return state;
}

export default reducer;
