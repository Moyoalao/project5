import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Read() {

    const {id}=useParams()
    const [article,setArticle]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/Read/'+id)
        .then(res=>{ 
            console.log(res)
            setArticle(res.data[0])
        })
        .catch(err=> console.log(err))
    },[])

  return (
    <div style={{marginTop:'100px'}}>
      <div>
        <h1>{article.title}</h1>
        <br/>
        <p>{article.info}</p>
      </div>
    </div>
  )
}

export default Read
