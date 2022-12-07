import React from 'react'
import Button from 'react-bootstrap/Button';
import HelperSection from '../HelperSection';
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import '../Profile.css'

const Home = ({helperData}) => {
  return (
    <div>
    <div className='page1 d-flex flex-column mb-3 justify-content-end'>
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
     <div className="profile">
      <Row xs={1} md={3} className="d-flex flex-wrap justify-content-between g-4">
          {helperData && helperData.data.helper_data.map(helper => <HelperSection helper = {helper} key={helper.id} /> )}
      </Row>
        <div className="d-flex flex-wrap justify-content-center">
        <Link to="/helper-profile"><Button  type= "submit" variant="info" size="sm">More helper profiles</Button></Link>
        </div>
        </div>   
    </div>
  )
}

export default Home