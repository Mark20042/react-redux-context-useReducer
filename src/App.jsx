import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { setType, fetchUsers, fetchOneUser } from "./store/users";
import { useState, useEffect } from "react";

//component
import DisplayUsers from "./DisplayUsers";
import DisplayNumbers from "./DisplayNumbers";
import DisplayPosts from "./DisplayPosts";
const App = () => {
  const [types, setTypes] = useState([]);
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState([]);
  // Access movies from the Redux store
  const movies = useSelector((state) => state.movies.list);
  const user = useSelector((state) => state.users);
  const oneUser = useSelector((state) => state.users.oneUser);
  const error = useSelector((state) => state.users.error);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchUsers())
      // use to get the error message from the API need to unwrap it
      .unwrap()
      // use to get the response
      .then((response) => console.log(response))
      // use to get the error message
      .catch((error) => console.log(error));
  }, []);

  const handleAddMovie = () => {
    dispatch(addMovie(movie));
  };

  const handleSetType = () => {
    dispatch(setType(types));
  };

  // Function to get users using the fetchUsers action
  const handlegetUsers = () => {
    dispatch(fetchUsers());
  };

  const handlegetOneUser = () => {
    dispatch(fetchOneUser({ id }));
  };

  // console.log(user);
  // console.log(movies);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies ? (
          movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
        ) : (
          <li>No movies</li>
        )}
      </ul>
      <input
        type="text"
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Movie Title"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <hr />
      <h3>User Type: {user.type}</h3>
      <input
        type="text"
        placeholder="User Type"
        onChange={(e) => setTypes(e.target.value)}
      />

      <button onClick={handleSetType}>Set User Type</button>

      <button onClick={handlegetUsers}>Get Users</button>
      <br />
      <br />
      <span style={{ color: "blue" }}>{user.status}</span>
      <br />
      <br />
      <ul>
        {user.users ? (
          user.users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>No users</li>
        )}
      </ul>
      <br />
      <br />
      <input
        type="text"
        placeholder="User ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handlegetOneUser}>Get One User</button>
      {oneUser ? <h2>{oneUser.name}</h2> : <h2>{error}</h2>}

      <DisplayUsers />
      <DisplayNumbers />
      <DisplayPosts />
    </div>
  );
};

export default App;
