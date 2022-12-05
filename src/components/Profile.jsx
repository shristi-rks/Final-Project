import React from 'react';
import { Link } from 'react-router-dom';
const Profile = ({ helper }) => {
  if (helper.publish === true) {
    return (
      <div className="profile">
        <div  key={helper.id}>
          <div className="header">
            <div className="price">{helper.price}€/h</div>
            <div className="imgs">
              <img
                className="img"
                src="https://images.pexels.com/photos/14398103/pexels-photo-14398103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile "
                width="300px"
                height="350px"
              />
            </div>
            <div className="name">{helper.userName}</div>
            <div style={{marginBottom:"15px"}}>
              <div className="bio">"{helper.bio}"</div>
            </div>
  
            {/* <div className="sm-space"></div> */}
  
            <div className="footer">
              <div className="numbers">
                <div className="item">
                  <span>{helper.gender}</span> {helper.age}yrs
                </div>
  
                <div className="item">
                  <span>{helper.city} </span> Finland
                </div>
                <div className="item">
                  <span>Reviews</span> Rating
                </div>
              </div>
            </div>
          </div>
          <button type='sumbit'><Link to="/bloglist">BOOK ME</Link></button>
        </div>
      </div>
    );

  } 
  
};

export default Profile;
