import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (<div>

    <div>
      <img className={s.imgAva} alt='foto' src='http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg' />
      <div>Ava + description</div>
    </div>
  </div>);
}




export default ProfileInfo;
