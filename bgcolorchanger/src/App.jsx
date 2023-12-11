import {useState} from 'react'
const App = () => {
  const  [ color ,setColor] = useState("black")
  return (
    
   <div className="text-center w-full h-screen duration-200" style={{backgroundColor:color}}>App
    
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-900 p-4 px-3  py-2 rounded-2xl">
            <button 
            onClick={()=>setColor("red")}
            className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"red"}}>Red</button>
            <button
             onClick={()=>setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"green"}}>Green</button>
            <button 
             onClick={()=>setColor("blue")}
            className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
         </div>
         </div>
      </div>
  
    
   
  )
}
export default App