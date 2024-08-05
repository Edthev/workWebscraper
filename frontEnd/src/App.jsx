import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import TextBoxWithDropdownComponent from "../components/TextBoxWithDropdown.jsx"
// import data from "./assets/info.json"
import SideBar from "../components/sidebar.jsx"
import react, {useState, useEffect} from 'react'
import axios from "axios"

function App() {
  const [componentData, setComponentData] = useState(null);
  const [maintenanceData,setMaintenanceData] = useState(null)
  const [selectedAptData,setSelectedAptData] = useState(null)
  const [formData,setFormData] = useState({})
  useEffect(() => {
        axios
        .get('http://localhost:3001/')
        .then(res=>{
          setComponentData(res.data)
        })
        .catch(err=>{
          console.log("Err:",err)
        })
    }, []);
  useEffect(()=>{
    axios.get('http://localhost:3001/data').then(res=>{
      setMaintenanceData(res.data)
    })
  },[])
  useEffect(()=>{
    console.log("maintanenceData",maintenanceData)
  },[formData])
  if(componentData === null){
    return <h1>Loading...</h1>
  }
  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  const buildingAddressesArray = Object.keys(Object.values(componentData["addresses"])[0])
  const vendorArray = Object.keys(Object.values(componentData["vendors"])[0])
  const status = componentData["status"]

  const handleChange = (name,value) =>{
    setFormData({...formData, [name]:value})
  }
  const handleSubmit =async (e) =>{
    e.preventDefault();
    const timestamp = new Date()
    formData.Time = timestamp
    try{
      const res = await axios.post('http://localhost:3001/data', formData,
        {
          headers:{
            'Content-Type': 'application/json',
          }
        }
      )
      console.log("res",res)
    axios.get('http://localhost:3001/data').then(res=>{
      console.log("re-data",res.data)
      setMaintenanceData(res.data)

    })
    }catch(err){
      console.error("error",err)
    }
  }

  return (
      <div>
        <SideBar/>
        <h1>Asden Maintenance</h1>
        <form onSubmit={handleSubmit}>
          <TextBoxWithDropdownComponent title="Address" handleChange={handleChange}  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent title="Apt" handleChange={handleChange}  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent title="Notes" handleChange={handleChange}  isRequired={true} placeholder="Notes"/>
          <TextBoxWithDropdownComponent title="Status" handleChange={handleChange}  isRequired={true} options={status}/>
          <input type="submit" value="Submit" />
        </form>
        <div id="data">
          {maintenanceData === null ? <div>Loading</div>:""}
        </div>
      </div>
  )
}

export default App
