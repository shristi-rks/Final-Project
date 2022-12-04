import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
 
export function LogInForm() {
  const { control, handleSubmit } = useForm({
    defaultValues:{
      userName:'',
      password:''
    }
  });
 
  const submitForm = (data) => {
    console.log(data);
  };
 
  return (
    <>
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100" noValidate onSubmit={handleSubmit(submitForm)}>
        <h1 className="mb-3 fs-3 fw-normal">Sign In</h1>
        <Row className="mb-3">
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
        <Row className="mb-3">
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

