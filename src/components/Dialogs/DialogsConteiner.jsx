
import { sendMessegeCreator, updateNewMessegeBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispachToProps = (dispatch) => {
  return {
    updateNewMessegeBody: (body) => {
      dispatch(updateNewMessegeBodyCreator(body));

    },
    sendMessenge: () => {
      dispatch(sendMessegeCreator());

    }

  }
}

const DialogsConteiner = connect(mapStateProps, mapDispachToProps)(Dialogs);

export default DialogsConteiner;

