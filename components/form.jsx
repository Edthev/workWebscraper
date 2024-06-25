const FormComponent = ({name,link}) => {
    return (
        <div>
            <a href={link}>
            <h1>{name}</h1>
            </a>
        </div>
    )
}

export default FormComponent