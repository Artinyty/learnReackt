import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer';


const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message + ' '} likeCount={' ' + p.likeCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className='s.postsBlock'>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.textarea__posts} />
        </div>
        <div>

          <button className={s.postBtn} onClick={addPost}> Add post </button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElement}
      </div>
    </div>);

}

export default MyPosts;