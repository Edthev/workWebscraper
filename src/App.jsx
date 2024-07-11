import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import DropDownFormComponent from "../components/dropDownForm.jsx"
import react, {useState} from 'react'

function App() {
  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  const buildingAddressesArray = [
    "3555 Bruckner Blvd (supers out)",
    "3224 Grand Concourse (here)",
    "1777 Grand Concourse(call)",
    "950 bronx park south",
    "946 bronx park south",
    "940 bronx park south",
    "932 bronx park south",
    "926 Bronx Park South",
    "922 Bronx Park South",
    "1711 Morris Ave",
    "1704 Morris Ave",
    "1685 Morris Ave",
    "1521 sheridan (apt w/ supper)",
    "1511 Sheridan Ave(apt w/ supper)",
    "2137 Vyse ave bronx park south",
    "1374 Bronx River Ave",
    "1364 Bronx River Ave",
    "3578 DeKalb Ave",
    "3576 DeKalb Ave",
    "3574 dekalb ave",
    "3572 dekalb",
  ]
  const status = [
      "Call Super",
      "Called Super",
      "Texted Super",
      "Told Super In-Person",
      "Call Back",
      "Email 3rd party",
      "Emailed 3rd Party",
      "Called 3rd Party",
      "In-Person",
      "Recall Tenant",
      "Waiting On 3rd Party",
      "Tell Jesus",
      "Tenant Called Super",
      "Super is Visiting",
      "Call 3rd Party",
      "Partial Fix",
      "Invoice Approval",
      "Waiting for Plumber",
      "Finished/Done",
      "Can't Follow Up",
      "Doesn't Matter",
      "Maybe Fixed",
      "Finish Today",
      "Roger",
      "Set Appointment with tenant",
      "Call Tennecia",
      "Isaac",
      "Tenant Texted Us",
      "Tenant Emailed Us",
      "Told Isaac",
  ]
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
        Asden Maintenance 
        <form>
          <TextFormComponent name="Input Name:"  isRequired={true} placeholder="Name"/>
          <DropDownFormComponent name="Address"  isRequired={true} options={buildingAddressesArray}/>
          <DropDownFormComponent name="input"  isRequired={true} options={["test3","test4"]}/>
          <TextFormComponent name="Input Apt:"  isRequired={true} placeholder="Name"/>
          <DropDownFormComponent name="Status"  isRequired={true} options={status}/>
          <div></div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
  )
}

export default App
