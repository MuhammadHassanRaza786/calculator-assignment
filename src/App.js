import { useState } from 'react';
function App() {

  const[calculator,setCalculator] = useState("");
  const[result,setResult] = useState("");

  const operatrs = ['/' , '*', '+' ,'-','.'];
  const updateCalcu = value =>{
     if(
      operatrs.includes(value) && calculator === ''||
      operatrs.includes(value) && operatrs.includes(calculator.slice(-1))
     )
     {
      return;
     }
     setCalculator(calculator+value);
     if(operatrs.includes(value)){
      setResult(eval(calculator+value).toString());
     }
    }
const createDigits = () =>{
  const digits =[];

  for(let i =1; i < 10; i++ ){
        digits.push(
          <button onClick={() => updateCalcu(i.toString())}
           key={i}>{i}</button>
        )
  }
  return digits;
}
const calculate = () =>{
   setCalculator(eval(calculator).toString());
}

const deleteLast = () =>{
  if(calculator == ''){
    return;
  }
  const value = calculator.slice(0, -1);
  setCalculator(value);
}
  return (
    <div className="App">
      <div className="calcu"> 
          <div className="display">
           {result ? <span></span>: ''} 
           &nbsp;
           {calculator || "0"}
          </div>
          <div className="oprts">
                <button onClick={() => updateCalcu('/')}>/</button> 
                <button  onClick={() => updateCalcu('*')}>*</button> 
                <button  onClick={() => updateCalcu('+')}>+</button> 
                <button onClick={() => updateCalcu('-')}>-</button>

                <button onClick={deleteLast}>AC</button>  
          </div>
           <div className="digits">
                  { createDigits() }
                <button onClick={() => updateCalcu('0')}>0</button> 
                <button onClick={() => updateCalcu('.')}>.</button> 
                <button onClick={calculate}>=</button> 
               
           </div>
      </div>
    </div>
  );
}

export default App;
