import React, {useRef,useEffect} from 'react';

function UseRefHook(){
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  useEffect(() => {
    console.log('component rendered');
  })

  function handleInput1(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'lightcoral';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleInput2(){
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = 'lightgreen';
    inputRef1.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleInput3(){
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = 'lightblue';
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
  }

  return(
    <>
    <button onClick={() => handleInput1()}>Click me</button>
    <input  ref = {inputRef1} placeholder='Start typing...'/> <br />

    <button onClick={() => handleInput2()}>Click me</button>
    <input  ref = {inputRef2} placeholder='Start typing...'/> <br />

    <button onClick={() => handleInput3()}>Click me</button>
    <input  ref = {inputRef3} placeholder='Start typing...'/>

    </>
  )
}

export default UseRefHook;