import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'; 
import './Profile.css'


const Profile = ({ helper }) => {
  if (helper.publish === true) {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
      <Col>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img height={"300px"}  variant="top"
        src="https://images.pexels.com/photos/14398103/pexels-photo-14398103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="profile " />
        <Card.Header className="text-center"><Card.Title>{helper.userName}</Card.Title></Card.Header>
        <Card.Body>
        <div className="text-muted d-flex justify-content-between">
          <div>
                <span>{helper.gender}</span>
            </div>
            <div>
                <span>{helper.age}yrs</span> 
            </div>
        </div>
          <Card.Text>
            "{helper.bio}"
          </Card.Text> 
          <Button  type= "submit" variant="primary"><Link to="/bloglist"></Link>BOOK ME</Button>
        </Card.Body>
        <Card.Footer>
            <div className="text-muted d-flex justify-content-between">
              <div className="item">
                <span>{helper.city} </span> Finland
              </div>
              <div className="item">
                Price/hr <span>{helper.price} </span> 
              </div>
              <div className="item">
                <span>Reviews</span> Rating
              </div>
              </div>
        </Card.Footer>
      </Card>
      </Col>
      </Row>
  </Container>
  )
}
}
export default Profile; 
