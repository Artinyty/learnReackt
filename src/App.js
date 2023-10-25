import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderComponent';


const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <Routes>
        <Route path='/dialogs/*' element={<DialogsConteiner />} />
        <Route path='/profile*' element={<ProfileContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/users*' element={<UsersContainer />} />
      </Routes>
    </div>

  );
}
export default App;
