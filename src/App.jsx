import { useState } from "react";
import UserInput from './components/UserInput';
import logo from './assets/investment-calculator-logo.png'
import Results from './components/Results';

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputs.duration>0 && inputs.annualInvestment>=0
  && inputs.expectedReturn>0 && inputs.initialInvestment>=0;

  // Generic handler for any input
  const handleInputChange = (inputId, value) => {
    setInputs((prev) => ({
      ...prev,
      [inputId]: Number(value), // keep number type OR keep +value
    }));
  };

  return (
    <>
    <header id="header">
      <img src={logo} alt="investment caluclator image" />
      <h1>Investment Calculator</h1>
    </header>
    
    
    <section id="user-input">
      <div className="input-group">
        <UserInput label={"INITIAL INVESTMENT"}
        inputId={"initialInvestment"}
        value={inputs.initialInvestment}
        onInputChange={handleInputChange}
        />
        <UserInput label={"ANNUAL INVESTMENT"}
        inputId={"annualInvestment"}
        value={inputs.annualInvestment}
        onInputChange={handleInputChange}
        />
      </div>
      <br />
      <div className="input-group">
        <UserInput label={"Expected Return %"}
        inputId={"expectedReturn"}
        value={inputs.expectedReturn}
        onInputChange={handleInputChange}
        />
        <UserInput label={"DURATION (in years)"}
        inputId={"duration"}
        value={inputs.duration}
        onInputChange={handleInputChange}
        />
      </div>
    </section>
    {!inputIsValid && <p className="center">Please enter a positive value.</p>}
    {inputIsValid && <Results input={inputs}/>}

    
    </>
    
  )
}

export default App
