import express from "express"
import mysql  from 'mysql'
import cors from 'cors'

const app = express()

app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"2002",
    database:'Articles'  
})

app.get('/',(req, res)=>{
    const sql ="SELECT writers.writerName,articles.articleID,articles.title,articles.intro,articles.info FROM  Writers LEFT JOIN articles ON writers.writerID=articles.writerID";
    db.query(sql,(err, result)=>{
        if(err) return res.json({Message: "Problem In Server"});
        return res.json(result);
    })
})


app.get('/Read/:id',(req, res)=>{
    const sql ="SELECT * FROM articles WHERE articleID=?"
    
    const id =req.params.id
    db.query(sql,[id],(err, result)=>{
        if(err) return res.json({Message: "Problem In Server"});
        return res.json(result);
    })
})



app.listen(3001, ()=>{
    console.log("Listening")
})