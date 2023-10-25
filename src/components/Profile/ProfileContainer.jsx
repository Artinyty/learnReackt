import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from '../../Redux/profile-reducer';
import axios from 'axios';
import { connect } from 'react-redux';

function ProfileContainer(props) {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      // Перенаправляем на профиль пользователя с id по умолчанию
      navigate('/profile/2');
    } else {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
          props.setUserProfile(response.data);
        });
    }
  }, [userId, navigate, props]);

  return <Profile {...props} profile={props.profile} />;
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
