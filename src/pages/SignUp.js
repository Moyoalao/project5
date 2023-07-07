import React,{useState} from 'react'
import { UserAuth } from '../contexts/AuthContext'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const  SignUp=()=> {

  const [email,setEmail] = useState("")
  const [password,setPassword] =useState("")
  const { createUser } = UserAuth()
  const [error,setError]=useState('')
  const navigate=useNavigate()

  const handleSignUp = async(e)=>{
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  

  }

  return (
    <div style={{marginTop:'100px'}}>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
          <div className='w-100' style={{maxWidth: '400px'}}>
              <Card>
              <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                
                <Form onSubmit={handleSignUp}>
                  <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='admin@gmail.com' onChange={(e)=>setEmail(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'placeholder='*********' onChange={(e)=>setPassword(e.target.value)} required/>
                  </Form.Group>
                  <br/>
                  {error&& <Alert>Email or Password in use</Alert>}
                  <Button  className='w-100' type='submit'>Sign Up</Button>
                </Form>
              </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              Already have an account? <Link to="/Login">Login</Link>
            </div> 
          </div>
        </Container>

    </div>
  )
}

export default SignUp