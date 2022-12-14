import { AuthContext } from 'components/AuthContext/AuthContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AuthPage = () => {
  const { setUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.formBasicEmail.value;
    const password = e.currentTarget.elements.formBasicPassword.value;
    setUser({ email, password });
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
