import React, {useState,useEffect} from 'react';

function UseEffect(){

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  const [height,setHieght] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  },[count,color]);
  useEffect(() => {
    window.addEventListener("resize",handleResize);
    console.log('Added an event listner');

    return () => {
      window.removeEventListener("resize",handleResize);
      console.log('Removed an event listner');
    }
  },[])
  

  function handleResize(){
    setHieght(window.innerHeight);
    setWidth(window.innerWidth);
  }

  const handleCountAdd = () => setCount((c) => c + 1);

  const handleCountSubtract = () => setCount((c) => c - 1);

  const handleColorChange = () => setColor((c) => c === 'green' ? 'red' : 'green');

  return(
    <>
    <h1 style={{color:color}}>Count: {count}</h1>
    <button onClick={() => handleCountAdd()}>Add</button><br/><br />
    <button onClick={() => handleCountSubtract()}>Subtract</button><br/><br/>

    <button onClick ={() => handleColorChange()} >Change Color</button>

    <h1>height: {height}</h1>
    <h1>width: {width}</h1>
    </>
  );
}

export default UseEffect;