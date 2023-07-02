import React,{ useState} from 'react'
import {Form,Button,Card, Alert} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'


const Login=()=> {

  const [email,setEmail] = useState("")
  const [password,setPassword] =useState("")

  const [error,setError]=useState(false)

  const navigate=useNavigate()

  const { signIn } = UserAuth()

  const handleLogin= async (e)=>{
    e.preventDefault()

    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }

  }

  return (
    <div className='Login'style={{marginTop:'100px'}}>
           <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
          <div className='w-100' style={{maxWidth: '400px'}}>
              <Card>
              <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                
                <Form onSubmit={handleLogin}>
                  <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='admin@gmail.com' onChange={e=>setEmail(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='*********' onChange={e=>setPassword(e.target.value)} required/>
                  </Form.Group>
                  <br/>
                  <Button  className='w-100' type='submit'>Login</Button>
                  {error&& <Alert>Invalid Email Or Password</Alert>}
                </Form>
              </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              Don't Have An Account? <Link to="/SignUp">Sign Up</Link>
            </div> 
          </div>
        </Container>

    </div>
  )
}

export default Login
