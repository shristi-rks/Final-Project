import React from "react";
import Profile from './Profile'
import Row from 'react-bootstrap/Row'



function Display({helperData}) {
  
  return (
    <div >
        <div className='d-flex flex-wrap justify-content-between'>
        <Row xs={1} md={3} className="g-4">
          {helperData && helperData.data.helper_data.map(helper => <Profile helper = {helper} key={helper.id} /> )}
        </Row>
        </div>
    </div>
  );
}
export default Display;