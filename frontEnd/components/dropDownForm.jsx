const DropDownFormComponent = ({title,type,isRequired, options, handleChange}) => {
    const handlingChange = (e) =>{
        const componentTitle = title
        const changeValue = e.target.value
        handleChange(componentTitle,changeValue)
      }
    return (
        <>
            <label>Choose a {title}: </label>
            <select className="dropdown" name="dropdown" onChange={handlingChange} >
                {options.map((option,i)=>(
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p></p>
        </>
    )
}

export default DropDownFormComponent