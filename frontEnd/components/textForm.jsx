import react, {useState} from 'react'

const textForm = ({title,type,isRequired,placeholder,handleChange}) => {
    const [formData,setFormData] = useState("")

      const handlingChange = (e) =>{
        const componentTitle = title
        const changeValue = e.target.value
        handleChange(componentTitle,changeValue)
      }
    return (
        <>
            <label>Input {title}:</label>
            <div>
                <input 
                    type={type} 
                    id={title} 
                    name={title} 
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