import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";

function App() {
  return (
    <div className="px-10 bg-black/80 text-white min-h-screen">
      <h1 className="text-center font-bold text-3xl">React</h1>
      <hr className="mt-5 mb-10" />

      <CounterEffect />
      <hr className="mt-5 mb-10" />
      <CounterHook />
      <hr className="mt-5 mb-10" />
      <CounterReducerComponent />
      <hr className="mt-5 mb-10" />
    </div>
  );
}

export default App;
