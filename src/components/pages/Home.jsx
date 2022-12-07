import React from 'react'
import Button from 'react-bootstrap/Button';
import HelperSection from '../HelperSection';
import { Link } from "react-router-dom"

const Home = ({helperData}) => {
  return (
    <>
    <div className='page1 d-flex justify-content-evenly'>
      <div>
      <h1>We’ve been there.<br/>We know how it feels.</h1>
      <h4>Get matched with someone in our network that has
        <br/> already been through what you are going through.</h4>
      </div>
      <div >
      <Button href = './FormHelper' variant="info" size="sm">
        Register as a Helper
        </Button> 
    </div>
     </div>
     <div className='container'>
     <div className='d-flex justify-content-between'>
          {helperData && helperData.data.helper_data.map(helper => <HelperSection helper = {helper} key={helper.id} /> )}
        </div>
        <div className='d-flex justify-content-center'>
        <Button  type= "submit" variant="info" size="sm"><Link to="/profile"></Link>More helper profiles</Button>
        </div>
        </div>
     
   
    </>
  )
}

export default Home