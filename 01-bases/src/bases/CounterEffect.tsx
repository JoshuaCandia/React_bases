import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { MAXIMUM_COUNT } from "../lib/consts";

const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);
  const counterRef = useRef<HTMLHeadingElement>(null);

  const handleIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useLayoutEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llego al valor maximo",
      "color:red; background-color:black"
    );

    const timeLine = gsap.timeline();

    timeLine
      .to(counterRef.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter]);

  return (
    <>
      <article className="flex gap-2 mb-5">
        <h1>Counter Effect: </h1>
        <h2 ref={counterRef}>{counter}</h2>
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

export default CounterEffect;
