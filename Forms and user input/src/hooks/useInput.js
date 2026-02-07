import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChange(event) {
    setIsEdited(false);
    setEnteredValue(event.target.value);
  }

  return {
    enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: isEdited && !valueIsValid,
  };
}
