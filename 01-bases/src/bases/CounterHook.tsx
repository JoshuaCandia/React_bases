import useCounter from "../hooks/useCounter";

const CounterHook = () => {
  const { counter, handleIncrement, elementToAnimate } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <article className="flex gap-2 mb-5">
        <h1>Counter Hook: </h1>
        <h2 ref={elementToAnimate}>{counter}</h2>
      </article>
      <button
        className="px-4 py-1 bg-blue-600 text-white rounded-xl"
        onClick={handleIncrement}
      >
        +1
      </button>
    </>
  );
};

export default CounterHook;
