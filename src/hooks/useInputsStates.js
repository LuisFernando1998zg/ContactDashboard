import { useState } from "react";

const useInputsStates = (isValidFn) => {
  const [value, setValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const onChangeInputs = (event) => {
    setValue(event.target.value);
  };

  const clearInputs = () => {
    setValue('');
    setInputTouched(false);
  };

  const blurHandlerInputs = () => {
    setInputTouched(true);
  };

  const isValid = isValidFn(value);
  const haveErrors = !isValid && inputTouched;

  return {
    value,
    haveErrors,
    isValid,
    onChangeInputs,
    blurHandlerInputs,
    clearInputs
  };
};

export default useInputsStates;
