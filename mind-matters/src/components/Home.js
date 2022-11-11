import React from 'react'

const Home = () => {

    const handleClick=(e)=>{
        console.log('handle, wins', e);
    }
    const handleClickAgain =(name, e)=>{
        console.log('hello' + name, e.target);
    }
  return (
    <div className='home'>
        <h2>HomePage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=> handleClickAgain(' marion ', e)}> Click Again</button>


    </div>
    
  );
}

export default Home