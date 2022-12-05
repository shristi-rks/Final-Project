import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import './Login.css'

 
export function LogInForm() {
  const { control, handleSubmit } = useForm({
    defaultValues:{
      userName:'',
      password:''
    }
  });
 /*The 'control' variable will be used on the 'Controller' element tag(from 'react-hook-form') 
 so that form has control over the actual element inside of it. */

  const submitForm = (data) => {
    console.log(data);
  };
 
  return (
    <>
      <Container id="main-container" className="h-100 justify-content-center">
        <Form id="sign-in-form" className="text-center p-3 " noValidate onSubmit={handleSubmit(submitForm)}>
        <h1 className="mb-3 fs-3 fw-normal">Sign In</h1>
        <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="4">
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="text" placeholder="User name" />
                )}
              />
            </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="4" >
               <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="password" placeholder="password" />
                )}
              />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
                <Form.Check label="Remember me" />
            </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
        <div>
        <p className="mt-5 text-muted">Do not have an account? Register <a href='./FormUser'>here</a></p>
        </div>
        </Form>
      </Container>
    </>
  );
}

