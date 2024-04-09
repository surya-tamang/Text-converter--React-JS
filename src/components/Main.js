import React, { useState } from "react";

export default function Main(props) {

    function uppercaseButton() {
        let newUpperText = inText.toUpperCase();
        setOutText(newUpperText);
    }
    function lowercaseButton() {
        let newLowerText = inText.toLowerCase();
        setOutText(newLowerText);
    }

    function onChange(input) {
        setInText(input.target.value);
    }
    const [inText, setInText] = useState('');
    const [outText, setOutText] = useState('');

    return (
        <main className="w-100 min-vh-100 d-flex  flex-column justify-content-center align-items-center mt-4">
            <div className="container mt-4">
                <h1> {props.title}</h1>
                <textarea className="w-50 mh-50" id="input" value={inText} onChange={onChange} placeholder="Enter the text here"></textarea>
                <textarea className="w-50 mh-50" value={outText} id="output" disabled></textarea>
            </div>
            <h3 className="mt-3">Convert the text into</h3>
            <br />
            <div className="container d-flex justify-content-center mb-5">
                <button className="mx-5" onClick={uppercaseButton}>Uppercase</button><button onClick={lowercaseButton}>Lowercase</button>
            </div>
        </main>
    )
}