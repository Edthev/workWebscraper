const textForm = ({name,type,isRequired}) => {
    return (
        <>
            <label>{name}</label>
            <input 
                type={type} 
                id={name} 
                name={name} 
                {...{isRequired} == true ? Required :{}}
            />
        </>
    )
}

export default textForm