import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 5 }: CounterProps) => {
  const [counter, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleIncrement = (number: number): void => {
    setCounter(({ counter, clicks }) => ({
      clicks: clicks + 1,
      counter: counter + number,
    }));
  };

  const resetCounter = () => {
    setCounter({
      clicks: 0,
      counter: 0,
    });
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => handleIncrement(1)}
        >
          +1
        </button>
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => handleIncrement(5)}
        >
          +5
        </button>
        <button
          className="px-4 py-1 bg-red-600 text-white rounded-xl"
          onClick={resetCounter}
        >
          Reset Counter
        </button>
      </div>
      <h1 className="text-lg font-bold underline">
        Counter By: {counter.counter}
      </h1>
      <h2 className="text-lg font-bold underline mb-10">
        Number of clicks: {counter.clicks}
      </h2>
    </>
  );
};

export default CounterBy;
