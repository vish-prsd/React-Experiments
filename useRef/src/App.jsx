import React,{useState} from 'react';
import UseRefHook from './UseRefHook' 

function App() {
  const [test,setTest] = useState("hello");
  return (
    <>
      <UseRefHook></UseRefHook>
    </>
  )
}

export default App
