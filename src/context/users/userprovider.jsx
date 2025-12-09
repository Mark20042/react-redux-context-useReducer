import UserContext from "./usercontext";

const UserProvider = ({ children }) => {
  const value = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
    {
      name: "Bob",
      age: 35,
    },
  ];
  return (
    <UserContext.Provider value={{ value }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
