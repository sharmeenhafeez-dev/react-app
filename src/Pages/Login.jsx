import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
function Login() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


    const LoginUser = (e)=>{

        e.preventDefault()

const payLoad = {
  email , password
}
console.log (payLoad)

    }
  return (
    <div className="container justify-content-center text-center bg-black p-5">
    <div className="row text-center   m-5" style={{ marginTop: '50px' }}>
      <div className=" d-flex justify-content-center align-items-center  ">
        <div className="login p-4 text-center text-white rounded ">
          <div className="heading">
            <h2>Login</h2>
          </div>
          <Form onSubmit={LoginUser}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="rounded-pill"
              />
              <Form.Text className="text-muted">{email}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-pill"
              />
            </Form.Group>
            <Button className="rounded-pill" variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  
  
  );
}

export default Login;