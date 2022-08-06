import React from 'react'

export default function Form({ textValue, setTextValue }) {
    console.log("--Form.js rendering--")
    return (
        <input className="textInput" type="text" name="value" placeholder="what to do today."
            value={textValue} onChange={(e) => {
                setTextValue(e.target.value);
            }}
        />
    )
}