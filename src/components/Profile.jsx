import React from 'react';
//import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

import './Profile.css'
import { Container } from 'react-bootstrap';

const Profile = ({ helper }) => {
  if (helper.publish === true) {
  return (
    <Container >
      <Row xs={1} md={4} className="g-4">
      <Col>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" 
        src="https://images.pexels.com/photos/14398103/pexels-photo-14398103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="profile " />
        <Card.Header className="text-center"><Card.Title>{helper.userName}</Card.Title></Card.Header>
        <Card.Body>
        <small className="text-muted">{helper.gender}</small><br/>
        <small className="text-muted">{helper.age}</small>
        <small className="text-muted">{helper.price}</small>
          <Card.Text>
            {helper.bio}
          </Card.Text> 
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Book here</Button>
          <p>Review</p>
        </Card.Footer>
      </Card>
      </Col>
      </Row>
    </Container>
    
  )
}
}
   /* 
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

          {/* <div className="sm-space"></div> *//*}

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
};*/

export default Profile; 
