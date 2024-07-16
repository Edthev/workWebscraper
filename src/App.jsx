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
  const [formData,setFormData] = useState({names:''})
  const handleChange = ({componentTitle,changeValue}) =>{
    setFormData({...formData, [componentTitle]:changeValue})
    console.log(formData)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
      <div>
        <SideBar/>
        <h1>Asden Maintenance</h1>
        <form onSubmit={handleSubmit}>
          <TextFormComponent title="Name" handleChange={handleChange}  isRequired={false} placeholder="Name"/>
          <DropDownFormComponent title="Address"  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent title="Apt"  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent title="Notes"  isRequired={false} placeholder="Notes"/>
          <DropDownFormComponent title="Status"  isRequired={false} options={status}/>
          <DropDownFormComponent title="Status"  isRequired={false} options={vendorArray}/>
          <div></div>
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default App
