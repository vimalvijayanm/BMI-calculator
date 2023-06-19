import React, { useState } from 'react'
import "./App.css"


function Bmicalculator(){
  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[age,setAge]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');

  let calculatebmi=(event) =>{
       event.preventDefault(); 
    if(weight===0 || height===0 || age===0)
    {
      alert("The input is invalid");
    }
    else{
      let bmi=(weight/ (height/100)**2)
      setBmi(bmi.toFixed(2))

      if(bmi<20)
      {
        setMessage("You are underweight")
      }
      else if(bmi>=20 && bmi<=25){
        setMessage("you are healthyweight")
      }
      else if(bmi>=25 && bmi<=30){
        setMessage("you are overweight")
      }
      else{
        setMessage("you are obese")
      }
    }
  }

  let reload=()=>{
    window.location.reload();
  }

  return(
    <div className='Bmicalculator'>
       <div className='container'>
         <h2 className="center">BMI calculator</h2>
          <form onSubmit={calculatebmi}>
            <div>
              <label>Weight (Kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
             <div>
               <label>Height (cm)</label>
               <input value={height} onChange={(e) => setHeight(e.target.value)} />
             </div>  
             <div>
              <label>Age</label>
              <input value={age} onChange={(e) => setAge(e.target.value)}/>
             </div>
             <button className='btn' type='submit'>Submit</button>
             <button className='btn btn-outline' type='submit' onClick={reload} >Reload</button>
          </form>
          <div className='center'>
              <h3>Your age is: {age}</h3>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
          </div>
       </div>
       <outlet/>
    </div>
  )

}

export default Bmicalculator