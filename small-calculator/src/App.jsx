import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { use } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 150000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValed = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInput} input={userInput} />
      {!inputIsValed && (
        <p className="center">Please enter vaild duration.</p>
      )}
      {inputIsValed && <Results input={userInput} />}
    </>
  );
}

export default App;
