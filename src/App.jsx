import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import DropDownFormComponent from "../components/dropDownForm.jsx"
import react, {useState} from 'react'
import data from "./assets/info.json"
import SideBar from "../components/sidebar.jsx"

function App() {
  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  let buildingAddressesArray = Object.values(data["addresses"])
  buildingAddressesArray = Object.keys(buildingAddressesArray[0])
  const status = data["status"]
  const [formData,setFormData] = useState({
    names:''
  })
  const handleChange = (e) =>{
    const {names,value} = e.target;
    setFormData({...formData, [names]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData({names:""})
  }
  return (
      <div>
        <SideBar/>
        Asden Maintenance 
        <form>
          <TextFormComponent name="Input Name:"  isRequired={false} placeholder="Name"/>
          <DropDownFormComponent name="Address"  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent name="Input Apt:"  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent name="Input Notes:"  isRequired={false} placeholder="Notes"/>
          <DropDownFormComponent name="Status"  isRequired={false} options={status}/>
          <div></div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
  )
}

export default App
