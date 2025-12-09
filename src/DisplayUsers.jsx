import { useContext } from "react";
import UserContext from "./context/users/usercontext";
const DisplayUsers = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {user.value.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayUsers;
