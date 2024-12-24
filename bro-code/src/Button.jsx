function Button(){

  let count = 0;

  const handleClick = () => {
    count < 1 ? console.log('Ouchh!😵'):null;
  };

  const handleClick2 = (name) => {
    count < 1 ? console.log(`Ouch! ${name} Stop clicking me!😵`):null;
  };

  const handleClick3 = (name) => {
    if(count < 3){
      count ++
      console.log(`${name}, You Clicked me ${count} times!`);
    }else{
       console.log(`${name}, Stop clicking me! 😵`);
    }
  };

  const handleClick4 = (e) => {
    // console.log(e);  
    e.target.innerText = 'Ouchh!🥵 Im being clicked.';
    setTimeout( () => e.target.innerText = 'Click Me!😜', 2000);
  }
  return(
    <button className="click-me-button"
      onClick={(e)=>{
        handleClick();
        handleClick2('Vishnu');
        handleClick3('Vishnu Bhai');
        handleClick4(e);
      }}
    >Click Me!😜</button>
  )

}

export default Button;