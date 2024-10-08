import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnimate = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  const handleIncrement = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    timeLine.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    timeLine.current.play(0);
  }, [counter]);

  return { handleIncrement, elementToAnimate, counter };
};

export default useCounter;
