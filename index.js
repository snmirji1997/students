const express = require('express');
const studentsRoute = require('./src/students/routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hEllo World!")
})

app.use('/api/v1/students', studentsRoute);


app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})