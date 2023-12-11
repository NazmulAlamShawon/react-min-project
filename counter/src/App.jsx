import {useState} from 'react'
const App = () => {
  const [counter,setCounter]= useState(0)
  //let counter = 15;
  
  
  const addValue = () => {
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   
  }
  const removeValue = () => {
    setCounter(counter - 1)
    
   }
  return (
    <div>
    <h1>React with counter app</h1>
    <h2>Counter Value: {counter}</h2>
     <button
       onClick={addValue}
     >
    add value
     </button>

     <button
       onClick={removeValue}
     >
    remove value
     </button>
    
  <p>footer :{counter}</p>
  
    </div>
  )
}
export default App