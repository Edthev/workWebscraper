import './index.css'
import TextFormComponent from "../components/textForm.jsx"
import DropDownFormComponent from "../components/dropDownForm.jsx"
import data from "./assets/info.json"
import SideBar from "../components/sidebar.jsx"
import react, {useState, useEffect} from 'react'

function App() {
  let dataRes = null
  const [data, setData] = useState(null);
  useEffect(() => {

    const fetchData = async () => {
      try{
        console.log("fetching...")
        dataRes = await fetch('http://localhost:3001/')
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
    console.log("dataRes",dataRes);
  }, []);
  if(dataRes === null){
    return <h1>Loading...</h1>
  }

  //	Status	Tenant Call Notes	Tenant Number	Follow Up Notes	Created Time	Finished Notes	Super Arrived	Priority	Fix:
  const buildingAddressesArray = Object.keys(Object.values(data["addresses"])[0])
  const vendorArray = Object.keys(Object.values(data["vendors"])[0])
  const status = data["status"]
  const [formData,setFormData] = useState({})

  const handleChange = (name,value) =>{
    setFormData({...formData, [name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const apt = e.target.elements.Apt.value
    const name = e.target.elements.Name.value
    const notes = e.target.elements.Notes.value
    const timeStamp = e.timeStamp

    const elements = event.target.elements

    for (let i=0;i<elements.length;i++){
      const element = elements[i]
      if(element.name=="dropdown" || element.value=="Submit"){
        for(let j=0;j<Object.values(formData).length;j++){
          if(Object.values(formData)[j]==element.value){
            console.log(Object.keys(formData)[j],element.value)
          }
        }
      }else{
        console.log(element.name,element.value)
      }
    }
  }

  sendEmail()

  return (
      <div>
        <SideBar/>
        <h1>Asden Maintenance</h1>
        <form onSubmit={handleSubmit}>
          {/* <TextFormComponent title="Name" handleChange={handleChange}  isRequired={false} placeholder="Name"/>
          <DropDownFormComponent title="Address" handleChange={handleChange}  isRequired={true} options={buildingAddressesArray}/>
          <TextFormComponent title="Apt" handleChange={handleChange}  isRequired={true} placeholder="Apt #"/>
          <TextFormComponent title="Notes" handleChange={handleChange}  isRequired={false} placeholder="Notes"/>
          <DropDownFormComponent title="Status" handleChange={handleChange}  isRequired={false} options={status}/>
          <DropDownFormComponent title="Vendor" handleChange={handleChange}  isRequired={false} options={vendorArray}/>
          <div></div> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default App
