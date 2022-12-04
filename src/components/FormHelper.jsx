import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
 
function FormHelper() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
 
  const submitForm = (data) => {
    console.log(data);
  };
 
  return (
    <>
      <Container>
        <Form noValidate onSubmit={handleSubmit(submitForm)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="First name"
                    isInvalid={errors.firstName}
                  />
                )}
              />
              {errors.firstName && (
                <Form.Control.Feedback type="invalid">
                  First Name is required
                </Form.Control.Feedback>
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