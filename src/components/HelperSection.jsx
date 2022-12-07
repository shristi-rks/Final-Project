import { Container } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import './Profile.css'


const HelperSection = ({ helper }) => {
  if (helper.publish === true && helper.id <= 19){
  return (
    <Container className='container d-flex justify-content-around'>
      <Row xs={1} md={4} className="g-4">
      <Col>
      <Card border="primary" height={"500px"} style={{ width: '18rem' }}>
        <Card.Img height={"250px"}  variant="top"
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
        <Link to="/helper-profile"><Button  type= "submit" variant="info" size="sm">See more </Button></Link>
        </Card.Body>
        <Card.Footer>
            <div className="text-muted d-flex justify-content-between">
              <div className="item">
                <span>{helper.city} </span> Finland
              </div>
              <div className="item">
                Price<span>{helper.price} </span> 
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
export default HelperSection; 
