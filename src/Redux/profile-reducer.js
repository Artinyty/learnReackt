const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialStore = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: "Hi, I believe in you ", likeCount: 55 },
    { id: 2, message: "Hi, I believe in you ", likeCount: 55 },
    { id: 5, message: "It's my first post", likeCount: 40 }
  ],
  newMsgBody: ''
};

const profileReducer = (state = initialStore, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default profileReducer;