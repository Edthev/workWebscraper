const textForm = ({name,type,isRequired,placeholder}) => {
    return (
        <>
            <label>{name}</label>
            <input 
                type={type} 
                id={name} 
                name={name} 
                {...{isRequired} == true ? Required :{}}
                placeholder={placeholder}
            />
        </>
    )
}

export default textForm