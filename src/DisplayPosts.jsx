import PostContext from "./context/posts/postcontext";

import { useContext, useEffect } from "react";

const DisplayPosts = () => {
  const context = useContext(PostContext);

  useEffect(() => {
    context.getPosts();
  }, []);

  console.log(context);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {context.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <hr />
      {context.loading ? <h2>Loading...</h2> : <h2>Not Loading</h2>}
      <button onClick={context.handleLoading}>Loading</button>
    </div>
  );
};

export default DisplayPosts;
