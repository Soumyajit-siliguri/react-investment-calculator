import UserInput from './components/UserInput';
import logo from './assets/investment-calculator-logo.png'

function App() {
  return (
    <>
    <header id="header">
      <img src={logo} alt="investment caluclator image" />
      <h1>Investment Calculator</h1>
    </header>
    
    
    <section id="user-input">
      <div className="input-group">
        <UserInput label={"INITIAL INVESTMENT"}
        inputId={"initInvst"} 
        placeholder={10000}
        />
        <UserInput label={"ANNUAL INVESTMENT"}
        inputId={"anlInvst"}
        placeholder={1500}
        />
      </div>
      <br />
      <div className="input-group">
        <UserInput label={"Expected Return %"}
        inputId={"expRtrnPercent"} 
        placeholder={6}
        />
        <UserInput label={"DURATION (in years)"}
        inputId={"yrs"}
        placeholder={10}
        />
      </div>
      
      

    </section>
    </>
    
  )
}

export default App
