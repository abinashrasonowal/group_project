import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'
import { useState } from 'react';
function Register() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login = (e)=>{
        e.preventDefault()
        Axios.post('http://localhost:5000/register/',{
            email: email,
            password: password           
        }).then(res=>{
            if(res.data.status === 'error')
            console.log(res.data.error)
            else if (res.data.status === 'present')
            console.log('already registered click to login')
            else console.log('created')
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container d-flex justify-content-center my-4">
            <Form action='/register' style={{ width: '18rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button onClick={login} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Register;
