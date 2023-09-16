
const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';
const SEND_MESSAGER = 'SEND-MESSAGER';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MSG_BODY:
      state.newMsgBody = action.body;
      return state;

    case SEND_MESSAGER:
      let body = state.newMsgBody;
      state.newMsgBody = '';
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessegeCreator = () => ({ type: SEND_MESSAGER });
export const updateNewMessegeBodyCreator = (body) => ({ type: UPDATE_NEW_MSG_BODY, body: body });

export default dialogsReducer;