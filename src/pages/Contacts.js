import React, { useState } from 'react'
import { Card,Button, Container, Form } from 'react-bootstrap'
import {db} from '../firebase'
import { addDoc,collection } from 'firebase/firestore'


const Contacts=()=> {

    const [email,setEmail] = useState("")
    const [message,setMesssage] = useState("")

    const UserCollectionRef =collection(db,"contactdata")

    const handleSubmit=async()=>{

        addDoc(UserCollectionRef,{
            email:email,
            message:message
        })
    }

  return (
    <div style={{marginTop:'100px'}}>
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <div className='w-100' style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <Form onClick={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" onChange={(event)=>setEmail(event.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={20} onChange={(event)=>setMesssage(event.target.value)} required />
                                </Form.Group>

                                <Button  className='w-100' type='submit'>Submit</Button>
                            </Form>
                            
                        </Card.Body>
                    </Card>
            </div>
        </Container>
      
    </div>
  )
}

export default Contacts
