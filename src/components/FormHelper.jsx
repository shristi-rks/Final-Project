import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { addHelperData } from "../postHelperData"
 
function FormHelper() {
  const {control,handleSubmit,formState: { errors },getValues} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      password1: "",
      password2: "",
      address: "",
      city: "",
      postalCode: "",
      price: "",
      motivation: "",
      bio: "",
      image: "",
      policy: "",
    }
  });
 
  const submitForm = async(requestData) => {
    const responseData = await addHelperData(requestData)
    console.log(responseData);
}
  const password1And2ShouldMatch = (value) => {
    return value === getValues("password1");
  };

  return (
    <>
      <Container>
        <Form noValidate onSubmit={handleSubmit(submitForm)}  >
        <h1 className="mb-3 fs-3 fw-normal">Register as a Helper</h1>
          <Row className="mb-3">
          <Col md>
            <Form.Group as={Col} md="4">
              <Form.Label>First Name</Form.Label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control {...field} type="text" placeholder="First name" isInvalid={errors.firstName}/>
                )}
              />
              {errors.firstName && (<Form.Control.Feedback type="invalid">First Name is required</Form.Control.Feedback>
              )}
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group as={Col} md="4">
              <Form.Label>Last Name</Form.Label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control  {...field} type="text" placeholder="Last name" isInvalid={errors.lastName}/>
                )}
              />
              {errors.lastName && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>
              )}
            </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md>
            <Form.Group as={Col} md="4">
            <Form.Label>User Name <br/><small><strong>Name that appears on your Profile</strong></small></Form.Label>
              <Controller
                name="userName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control  {...field} type="text" placeholder="User name" isInvalid={errors.userName} /> 
                )}
              />
              {errors.userName && (<Form.Control.Feedback type="invalid">User Name is required</Form.Control.Feedback>)}
            </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md >
            <Form.Group as={Col} md="4">
            <Form.Label>Age</Form.Label>
              <Controller
                name="age"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Select aria-label="Default select example" {...field} type="text" placeholder="Age" isInvalid={errors.age}>
                  <option>Select your age</option>
                  <option value="20-30">20-30</option>
                  <option value="30-40">30-40</option>
                  <option value="40-50">40-50</option>
                  <option value="50-60">50-60</option>
                  <option value="60-70">60-70</option>
                </Form.Select>
                )}
              />
              {errors.age && (<Form.Control.Feedback type="invalid">Age is required</Form.Control.Feedback>)}
            </Form.Group>
            </Col>
            <Col md >
            <Form.Group as={Col} md="4">
            <Form.Label>Gender</Form.Label>
              <Controller
                name="gender"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Select aria-label="Default select example" {...field} type="text" placeholder="Gender" isInvalid={errors.age}>
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Do not prefer to mention">Do not prefer to mention</option>
                </Form.Select>
                )}
              />
              {errors.gender && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>)}
            </Form.Group>
            </Col>    
          </Row>
          <Row className="mb-3">
          <Col md>
            <Form.Group as={Col} md="4" >
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                rules={{ required:true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                render={({ field }) => (
                  <Form.Control {...field} type="text" placeholder="email@example.com" isInvalid={errors.email} />
                )}
              />
              {errors.email?.type === "pattern" && (<Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
              )}
              {errors.email?.type === "required" && (<Form.Control.Feedback type="invalid">Email required</Form.Control.Feedback>
              )}
              
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group as={Col} md="4" >
              <Form.Label>Phone</Form.Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="phone" placeholder="Phonenumber" />
                )}
              />
            </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password1"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="password" placeholder="Password" />
                )}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Controller
                name="password2"
                control={control}
                rules={{ validate: password1And2ShouldMatch }}
                render={({ field }) => (
                  <Form.Control {...field} type="password" placeholder="Confirm Password" isInvalid={errors.password2} />
                )}
              />
              {errors.password2?.type !== "validate" && (<Form.Control.Feedback type="invalid"> Password should be same</Form.Control.Feedback>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group className="mb-3" md="4">
        <Form.Label>Address</Form.Label>
        <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="text" placeholder="Apartment, studio, or floor" /> 
                )}
              />
      </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>City</Form.Label>
          <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control  {...field} type="text" placeholder="City" isInvalid={errors.city} /> 
                )}
              />
              {errors.city && (<Form.Control.Feedback type="invalid">City is required</Form.Control.Feedback>)}
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Postal Code</Form.Label>
          <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <Form.Control  {...field} type="text" placeholder="Postal code"  /> 
                )}
              />
        </Form.Group>
      </Row>
      <Row className="mb-3">
            <InputGroup >
            <Form.Label>Price<div><p><strong>Note that the first session is free</strong></p></div></Form.Label>
            <br/>
            <InputGroup.Text>€</InputGroup.Text>
              <Controller
                name="price"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Select aria-label="Default select example" {...field} type="text" placeholder="Price" isInvalid={errors.price}>
                  <option>Price per session</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="Donation">Donation</option>
                </Form.Select>
                )}
              />
              {errors.price && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>)}
              
              </InputGroup>
              {/*
            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I understand that the first session is free" />
            </Form.Group>
                */}
        </Row>
        <Row>
        <Form.Label>Why do you want to become a helper?<br/><small><strong>This will not appear on your Profile</strong></small><br/></Form.Label>
        </Row>
        <Row className="mb-3">
          <InputGroup>
            <InputGroup.Text>Your <br/> Motivation</InputGroup.Text>
            <Controller
                name="motivation"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control  {...field} as="textarea" aria-label="With textarea"  isInvalid={errors.motivation} /> 
                )}
              />
              {errors.city && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>)}
        </InputGroup>
        </Row> 
        <Row>
        <Form.Group as={Col} >
          <Form.Label>Bio<br/><small><strong>Note! This will appear on your Profile</strong></small></Form.Label>
          <Controller
                name="bio"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control  {...field} type="textarea" placeholder="Your Bio/Profile" isInvalid={errors.city} /> 
                )}
              />
              {errors.bio && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>)}
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3">
        <Form.Label>Upload image</Form.Label>
        <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Form.Control  {...field} type="file"  /> 
                )}
                />
      </Form.Group>
        </Row>
        <Row>
            <Form.Group className="d-flex justify-content-center mb-4" >
            <Controller
                name="policy"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Form.Check {...field} label=<p>I have read and agree to Mind-matters’s <a href='https://www.mindmatters.website/privacy-policy'>User Agreement and Privacy Policy.</a></p> isInvalid={errors.policy}/>    
                )}
              />
              {errors.policy && (<Form.Control.Feedback type="invalid">required field</Form.Control.Feedback>)}
            </Form.Group>
        </Row>
       
        <div>
        <Button type="submit">Submit form</Button>
        </div>
        </Form>
      </Container>
    </>
  );
}
export default FormHelper;