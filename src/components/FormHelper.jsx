import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
 
function FormHelper() {
  const {control,handleSubmit,formState: { errors },getValues} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      userName: "",
      agr: "",
      gender: "",
      email: "",
      phone: "",
      password1: "",
      password2: "",
    },
  });
 
  const submitForm = (data) => {
    console.log(data);
  };
  const password1And2ShouldMatch = (value) => {
    return value === getValues("password1");
  };
 
  return (
    <>
      <Container>
        <Form noValidate onSubmit={handleSubmit(submitForm)} controlId="validationCustom01" >
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
                  <option value="1">20-30</option>
                  <option value="2">30-40</option>
                  <option value="3">40-50</option>
                  <option value="4">50-60</option>
                  <option value="5">60-70</option>
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
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                  <option value="4">Do not prefer to mention</option>
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
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </>
  );
}
export default FormHelper;