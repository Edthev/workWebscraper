import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import TextBoxWithDropdownComponent from "../components/TextBoxWithDropdown.jsx"
// import data from "./assets/info.json"
import SideBar from "../components/sidebar.jsx"
import react, {useState, useEffect} from 'react'
import axios from "axios"

function App() {
  const [data, setData] = useState(null);
  const [formData,setFormData] = useState({})
  useEffect(() => {
        axios
        .get('http://localhost:3001/')
        .then(res=>{
          setData(res.data)
        })
        .catch(err=>{
          console.log("Err:",err)
        })
    }, []);
  if(data === null){
    return <h1>Loading...</h1>
  }
  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  const buildingAddressesArray = Object.keys(Object.values(data["addresses"])[0])
  const vendorArray = Object.keys(Object.values(data["vendors"])[0])
  const status = data["status"]

  const handleChange = (name,value) =>{
    setFormData({...formData, [name]:value})
  }
  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:3001/data', formData,
        {
          headers:{
            'Content-Type': 'application/json',
          }
        }
      )
      console.log(res)
    }catch(err){
      console.error("error",err)
    }
  }

  return (
      <div>
        <SideBar/>
        <h1>Asden Maintenance</h1>
        <form onSubmit={handleSubmit}>
          <TextFormComponent title="Name" handleChange={handleChange}  isRequired={true} placeholder="Name"/>
          <TextBoxWithDropdownComponent title="Address" handleChange={handleChange}  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent title="Apt" handleChange={handleChange}  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent title="Notes" handleChange={handleChange}  isRequired={true} placeholder="Notes"/>
          <TextBoxWithDropdownComponent title="Status" handleChange={handleChange}  isRequired={true} options={status}/>
          <TextBoxWithDropdownComponent title="Vendor" handleChange={handleChange}  isRequired={true} options={vendorArray}/>
          <div></div>
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default App
