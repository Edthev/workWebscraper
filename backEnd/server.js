const data = require("./assets/info.json")
const cors = require('cors')
const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs')

app.use(cors())

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post('/data',async(req,res)=>{
  const data = req.body
  try{
    fs.readFile
    res.status(201).json({message:"Saved Successfully"})
  }catch (error) {
    res.status(500).json({message:"Saving Error",error})
  }
})