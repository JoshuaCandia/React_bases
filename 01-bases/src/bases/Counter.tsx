import { useState } from "react";
import { NUMBER_TO_REST } from "../lib/consts";

interface CounterProps {
  initialValue: number;
}

const Counter = ({ initialValue }: CounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleIncrement = (number: number): void => {
    setCounter((prev) => prev + number);
  };

  const handleDecrement = (number: number): void => {
    if (counter < number || counter <= 0) return setCounter(0);

    setCounter((prev) => prev - number);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={() => handleIncrement(1)}>+1</button>
      <button onClick={() => handleDecrement(NUMBER_TO_REST)}>
        -{NUMBER_TO_REST}
      </button>
    </>
  );
};

export default Counter;
