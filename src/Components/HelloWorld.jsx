import { useEffect, useState } from "react";
import "../App.css";
const HelloWorld = (props) => {
  useEffect(() => {
    console.log("Hello World");
  }, []);
  const [counter, setCounter] = useState(0);
  const { title } = props;
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello World !</h1>
      <h2>Title: {title}</h2>
      <h3>Counter: {counter}</h3>
      <div className="horizontalLayout">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </>
  );
};

export default HelloWorld;
