import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import DropDownFormComponent from "../components/dropDownForm.jsx"
import react, {useState} from 'react'
import data from "./assets/info.json"
import SideBar from "../components/sidebar.jsx"

function App() {
  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  const buildingAddressesArray = Object.keys(Object.values(data["addresses"])[0])
  const vendorArray = Object.keys(Object.values(data["vendors"])[0])
  const status = data["status"]
  const [formData,setFormData] = useState({})
  const handleChange = (name,value) =>{
    setFormData({...formData, [name]:value})
    // console.log("formData",formData)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const apt = e.target.elements.Apt.value
    const name = e.target.elements.Name.value
    const notes = e.target.elements.Notes.value
    const timeStamp = e.timeStamp
  }
  return (
      <div>
        <SideBar/>
        <h1>Asden Maintenance</h1>
        <form onSubmit={handleSubmit}>
          <TextFormComponent title="Name" handleChange={handleChange}  isRequired={false} placeholder="Name"/>
          <DropDownFormComponent title="Address" handleChange={handleChange}  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent title="Apt" handleChange={handleChange}  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent title="Notes" handleChange={handleChange}  isRequired={false} placeholder="Notes"/>
          <DropDownFormComponent title="Status" handleChange={handleChange}  isRequired={false} options={status}/>
          <DropDownFormComponent title="Vendor" handleChange={handleChange}  isRequired={false} options={vendorArray}/>
          <div></div>
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default App
