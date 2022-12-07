import React from "react";
import Profile from './Profile'


function Display({helperData}) {
  
  return (
    <div >
        <div className='d-flex justify-content-between'>
          {helperData && helperData.data.helper_data.map(helper => <Profile helper = {helper} key={helper.id} /> )}
        </div>
    </div>
  );
}
export default Display;