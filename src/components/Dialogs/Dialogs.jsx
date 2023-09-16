import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messege from './Messege/Messege';
import { sendMessegeCreator, updateNewMessegeBodyCreator } from '../../Redux/state';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  console.log(state);

  let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Messege message={m.message} id={m.id} />);

  let newMessagesBody = state.newMsgBody;

  let onSendMessengeClick = () => {
    props.store.dispatch(sendMessegeCreator());
  };

  let onNewMessegeChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessegeBodyCreator(body));

  };
  return (
    <div className={s.dialoges} >
      <div className={s.dialogesItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div> <textarea value={newMessagesBody} onChange={onNewMessegeChange} placeholder='Leave your MSG'></textarea> </div>
        <div> <button onClick={onSendMessengeClick}>send</button> </div>
      </div>


    </div>


  );
};

export default Dialogs;

