import PostContext from "./postcontext";
import axios from "axios";
import { useReducer } from "react";

const initialState = {
  loading: true,
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload.posts,
      };
    case "HANDLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: "GET_POSTS",
      payload: {
        posts: res.data,
      },
    });
    dispatch({ type: "HANDLE_LOADING" });
  };
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        handleLoading: () => dispatch({ type: "HANDLE_LOADING" }),
        getPosts: getPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
