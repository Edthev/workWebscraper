const TextBoxWithDropdown = ({ title, type, isRequired, options, handleChange }) => {
    const handlingChange = (e) => {
      const componentTitle = title;
      const changeValue = e.target.value;
      handleChange(componentTitle, changeValue);
    };
    if(isRequired){
        <>
        <label>Choose a {title}: </label>
        <input
          type="text"
          list={`${title}-dropdown-options`}
          className="dropdown1"
          onChange={handlingChange}
          required
        />
        <datalist id={`${title}-dropdown-options`} required>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </datalist>
        <p></p>
      </>
    }
    return (
      <>
        <label>Choose a {title}: </label>
        <input
          type="text"
          list={`${title}-dropdown-options`}
          className="dropdown2"
          onChange={handlingChange}
        />
        <datalist id={`${title}-dropdown-options`}>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </datalist>
        <p></p>
      </>
    );
  };
  
  export default TextBoxWithDropdown;
  