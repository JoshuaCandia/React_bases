import { useReducer } from "react";
import * as actions from "./actions/counter.actions";
import { CounterState } from "./interfaces/counter.interfaces";
import { counterReducer } from "./reducer/counter.reducer";

const INITIAL_STATE: CounterState = {
  counter: 15,
  previous: 10,
  changes: 2,
};

const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const increaseBy = (value: number): void => {
    dispatch(actions.doIncreaseBy(value));
  };
  const handleReset = (): void => {
    dispatch(actions.doReset());
  };

  return (
    <>
      <h1>Counter Reducer Segment</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <div className="flex flex-col items-start gap-2">
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => increaseBy(1)}
        >
          +1
        </button>
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => increaseBy(5)}
        >
          +5
        </button>
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => increaseBy(10)}
        >
          +10
        </button>
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded-xl"
          onClick={() => handleReset()}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default CounterReducerComponent;
