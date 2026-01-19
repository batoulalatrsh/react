import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { use } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    AnnualInvestment: 0,
    ExpectedReturn: 0,
    Duration: 0,
  });
  function handleUserInput(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInput} input={userInput} />
      <Results input={userInput}/>
    </>
  );
}

export default App;
