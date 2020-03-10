import React from "react";
import  { Form, Button }  from "react-bootstrap";
import './OnboardForm.css'


function OnboardForm() {
  return (
    <div className='form-wrapper'>
      <h1>Try it right now.</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Take The Leap
        </Button>
      </Form>
    </div>
  );
}

export default OnboardForm;
