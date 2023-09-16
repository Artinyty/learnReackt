
const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';
const SEND_MESSAGER = 'SEND-MESSAGER';

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MSG_BODY) {
    state.newMsgBody = action.body;
  }
  else if (action.type === SEND_MESSAGER) {
    let body = state.newMsgBody;
    state.newMsgBody = '';
    state.messages.push({ id: 6, message: body });

  }
  return state;
}
export default dialogsReducer;