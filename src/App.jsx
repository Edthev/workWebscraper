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
  const handleChange = (names,values) =>{
    setFormData({...formData, [names]:values})
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
          <TextFormComponent name="Input Name:" handleChange={handleChange}  isRequired={false} placeholder="Name"/>
          <DropDownFormComponent name="Address"  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent name="Input Apt:"  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent name="Input Notes:"  isRequired={false} placeholder="Notes"/>
          <DropDownFormComponent name="Status"  isRequired={false} options={status}/>
          <DropDownFormComponent name="Status"  isRequired={false} options={vendorArray}/>
          <div></div>
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default App
