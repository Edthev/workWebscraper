const infoFilePath  = require("./assets/info.json")
const dataFilePath  = "./assets/data.json"
const maintenaceData = require("./assets/data.json") 
const cors = require('cors')
const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(infoFilePath);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post('/data',async(req,res)=>{
  const readDataFromFile = () => {
    try {
      const rawData = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(rawData);
    } catch (error) {
      console.error('Error reading data from file:', error);
      return res.status(400).json({Error: "Error Reading Data From File"});
    }
  };
  const writeDataToFile = (data) => {
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing data to file:', error);
    }
  };

  try{
    // TODO: make this but for the data

      // fs.readFile
    const reqData = req.body
    const {Address} = reqData
    const {Apt} = reqData
    let data = readDataFromFile()

    // if (!data[Address] || !data[Apt]) {
    //   return res.status(400).json({ message: 'Invalid data' });
    // }

    if(!data[Address]){
      console.log("--new address added--")
      data[Address] = {}
    }
    if(!data[Address][Apt]){
      console.log("--new apt added--")
      data[Address][Apt] = {}
    }

   const reqTime = reqData.Time

    console.log("reqTime",reqTime)

    data[Address][Apt][reqTime] = reqData

    writeDataToFile(data)
    

    console.log("data:",reqData)
    res.status(201).json({message:"Saved Successfully"})
  }catch (error) {
    res.status(500).json({message:"Saving Error",error})
  }
})
app.get('/data',(req,res)=>{
  res.send(maintenaceData)
})
app.get('/login',(req,res)=>{
})