import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';
import store from '../../Redux/redux_store';

const Profile = (props) => {
  return (

    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>);
}

export default Profile;
