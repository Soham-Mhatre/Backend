require('dotenv').config()
const express= require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Hello')
})

app.get('home',(req,res)=>{
    res.send("<h1>My name is Soham</h1>")
})

app.get('nice', (req,res)=>{
    res.send("<h2>Hello there</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})