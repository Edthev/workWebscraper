import React, {useState} from 'react';

const InputComponent = ({InputName}) => {
    const [InputComponent, setInputValue] = useState('');

    const handleChange = (event) =>{
        setInputValue(event.target.value)
    }

    return (
        <div>
            <label>{InputName}</label>
            {/*
             <input
                type="text"
                id={InputName}
                value={inputValue}
                onChange={handleChange}
                />
                <p>You typed: {inputValue}</p> 
                */}
        </div>
    )

}