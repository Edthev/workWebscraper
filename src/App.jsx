import './App.css'
import FormComponent from "../components/form.jsx"
import react, {useState} from 'react'

function App() {
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
    <>
      <div>
        tests1234
        <form>
          <FormComponent name="input"  isRequired={true} />
          <div></div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </>
  )
}

export default App
