import React from 'react'

const Home = () => {

    const handleClick=()=>{
        console.log('handle');
    }
    const handleClickAgain =(name)=>{
        console.log('hello' + name);
    }
  return (
    <div className='home'>
        <h2>HomePage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClickAgain('marion')}> Click Again</button>


    </div>
    
  );
}

export default Home