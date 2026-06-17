
// const express=  require('express')
import express from 'express'

const app = express();

// route
 app.get('/about',(req, res)=>{
    console.log(req)
    res.send("hello1")
 })
 app.get('/user/:id',(req, res)=>{
    const ID=  req.params.id
    res.send(`Id ${ID}`)
 })
 app.get('/user',(req, res)=>{
    const key = req.query.key
    res.send(`response ${key}`)
 })


const PORT =3003;

app.listen(PORT, ()=>{
console.log(`listing http://localhost:${PORT}`)
})
