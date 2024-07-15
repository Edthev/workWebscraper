import react, {useState} from 'react'

const textForm = ({name,type,isRequired,placeholder}) => {
    const [formData,setFormData] = useState("")

      const handleChange = (e) =>{
          const {value} = e.target;
          console.log("value",value)
        setFormData(value)
        console.log("formData",formData)
      }
    return (
        <>
            <label>{name}</label>
            <div class="">
                <input 
                    type={type} 
                    id={name} 
                    name={name} 
                    {...{isRequired} == true ? Required :{}}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            <p>{formData}</p>
            </div> 
        </>
    )
}

export default textForm