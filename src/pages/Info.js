import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Info() {

  const [data,setData]= useState([])


   useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
      },[])
      



  return (
    <div style={{marginTop:'100px'}}>
      <div>   
        {data.map((articles, index)=>{
          return <Card border="dark" style={{ width: '18rem' }} key={index} >
          <Card.Img variant="top" src="../assets/brain.jpg/100px180" />
          <Card.Body>
            <Card.Title>{articles.title}</Card.Title>
            <Card.Text>
            {articles.intro}
            </Card.Text>
            <Link to={`/Read/${articles.articleID}`}><Button variant="primary" >ReadMore</Button></Link>
            
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">{articles.writerName}</small>
        </Card.Footer>
        </Card>
      
        })}
     </div>
    </div>
  )
}

export default Info
