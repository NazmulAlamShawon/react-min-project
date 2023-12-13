import {useState} from 'react'

import InputBox from "./components";

import useCurrencyInfo from "./hooks/useCurrencyInfo";
const App = () => {
  const [amount,setAmount] =useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertAmount,setConvertAmount] = useState(0)
  const currencyInfo= useCurrencyInfo(from)
    Object.key(currencyInfo)
    
    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertAmount(amount)
      setAmount(convertAmount)
    }

  return (
    <div>
       <h1 className="text-center">Currency app</h1>
    </div>
  )
}
export default App