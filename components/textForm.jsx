import react, {useState} from 'react'

const textForm = ({name,type,isRequired,placeholder,handleChange}) => {
    const [formData,setFormData] = useState("")

      const handlingChange = (e) =>{
        const names = name
        const values = e.target.value
        handleChange(names,values)
      }
    return (
        <>
            <label>{name}</label>
            <div>
                <input 
                    type={type} 
                    id={name} 
                    name={name} 
                    {...{isRequired} == true ? Required :{}}
                    placeholder={placeholder}
                    onChange={handlingChange}
                />
            <p>{formData}</p>
            </div> 
        </>
    )
}

export default textForm