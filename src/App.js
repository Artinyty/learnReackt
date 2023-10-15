import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';



const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
        <Route path='/profile' element={<Profile store={props.store} />} />
      </Routes>
    </div>

  );
}


export default App;
// dialogsData = { props.state.dialogsPage.dialogsData } messages = { props.state.dialogsPage.messages }

// 