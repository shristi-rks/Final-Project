import React from 'react';
const Profile = ({ helper }) => {
  return (
    
    <div className="profile">
      <div className="card" key={helper.id}>
        <div className="header">
          <div className="sm">{helper.price}€/h</div>
          <div className="img">
            <img
              className="img"
              src="https://images.pexels.com/photos/14398103/pexels-photo-14398103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile "
              width="350px"
              height="400px"
            />
          </div>
          <div className="name">{helper.nick_name}</div>
          <div>
            <div className="bio">"{helper.bio}"</div>
          </div>

          <div className="sm-space"></div>

          <div className="footer">
            <div className="numbers">
              <div className="item">
                <span>{helper.gender}</span> {helper.age}yrs
              </div>

              <div className="item">
                <span>{helper.address} </span> Finland
              </div>
              <div className="item">
                <span>Reviews</span> Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
