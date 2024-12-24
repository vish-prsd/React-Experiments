import React,{useState} from "react";

function MyComponent(){
  const [count,setCount] = useState(0);

  let clicked = (command) => command === 'incre' ? setCount((i) => ++i): setCount((i) => --i);
  
  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => {clicked('incre')}}>Increment</button>
      <button onClick={() => {clicked('decre')}}>Decrement</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
    </>
   
  );
}

export default MyComponent;