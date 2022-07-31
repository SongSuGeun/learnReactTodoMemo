import React from 'react'

export default function Form({ textValue, setTextValue }) {
    return (
        <input className="textInput" type="text" name="value" placeholder="해야할 일을 입력하세요."
            value={textValue} onChange={(e) => {
                setTextValue(e.target.value);
            }}
        />
    )
}