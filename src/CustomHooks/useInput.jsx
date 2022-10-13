import { useState } from "react";

const useInput = ({ pattern }) => {
  const [inputState, SetInputState] = useState("");
  const [isTouched, SetIsTouched] = useState(false);
  const inputIsValid = () => {
    if (pattern === "") {
      return true;
    }
    return pattern.test(inputState);
  };
  const inputValueHandler = (event) => {
    SetInputState(event.target.value);
  };
  const blurHandler = (e) => {
    SetIsTouched(false);
  };
  const focusHandler = () => {
    SetIsTouched(true);
  };
  return {
    value: inputState,
    isTouched: isTouched,
    isValid: inputIsValid,
    inputValueHandler,
    blurHandler,
    focusHandler,
  };
};

export default useInput;
