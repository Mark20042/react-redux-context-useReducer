import { useContext, useEffect } from "react";
import NumberContext from "./context/numbers/numbercontext";
const DisplayNumbers = () => {
  const context = useContext(NumberContext);

  useEffect(() => {
    context.getNumbers();
  }, []);
  console.log(context);
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {context.numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayNumbers;
