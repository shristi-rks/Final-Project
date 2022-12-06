import React from 'react'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
    <div className='page1 d-flex justify-content-evenly'>
      <div>
      <h1>We’ve been there.<br/>We know how it feels.</h1>
      <h4>Get matched with someone in our network that has
        <br/> already been through what you are going through.</h4>
      </div>
      <div >
      <Button href = './FormHelper' variant="primary" size="sm">
        Register as a Helper
        </Button> 
    </div>
     </div>
     
   
    </>
  )
}

export default Home