import NumberContext from "./numbercontext";
import { useReducer } from "react";

const initialState = {
  numbers: [1, 2, 3, 4, 5],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_NUMBERS":
      return {
        ...state,
        numbers: [1, 2, 3, 4, 5],
      };
    default:
      return state;
  }
};
const NumberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNumbers = () => {
    dispatch({ type: "GET_NUMBERS" });
  };
  return (
    <NumberContext.Provider
      value={{ numbers: state.numbers, getNumbers: getNumbers }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
