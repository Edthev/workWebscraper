const DropDownFormComponent = ({title,type,isRequired, options}) => {

    return (
        <>
            <label>Choose a {title}: </label>
            <select className="dropdown" name="dropdown">
                {options.map((option,i)=>(
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    )
}

export default DropDownFormComponent