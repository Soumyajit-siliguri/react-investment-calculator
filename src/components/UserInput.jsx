import {useState} from 'react';

export default function UserInput({label, inputId, value, onInputChange}){
    /*const [userInput, setUserInput]= useState({
        initialIvestment: 10000,
        annualInvestment: 1500,
        expctedReturn: 6,
        duration: 10
    });
    */
/*
    const [userInput, setUserInput]= useState({
        inputvalue: placeholder,
    });
*/
    /*function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInputs => {
            return{
                ...prevUserInputs,
                [inputIdentifier]: newValue
            };
        });
    }
        */
/*
    function handleChange(event){
        setUserInput({ inputvalue: Number(event.target.value) });

    }
 */   

    return (
        <div>
            <label htmlFor={inputId}>{label}:</label>
            <input 
                type="number" 
                id={inputId} 
                name={inputId} 
                required
                value={value}
                //{/*onChange={(event) => handleChange(event.target.value)} *///
                onChange={(event) => onInputChange(inputId, event.target.value)}
            />
            {/*{console.log(inputId, value)} */}
        </div>

    );
}