import React, { useState } from "react";

export default function Main(props) {

    function uppercaseButton() {
        console.log('button clicked')
        setOutText('You have clicked the Uppercase Button')
    }
    function lowercaseButton() {
        console.log('you have clicked the lowercase button');
        setOutText('You have clicked the lowercase button')
    }

    function onChange() {
        setOutText('You have changed the text')
    }
    const [intText, setInText] = useState('Enter the text here');
    const [outText, setOutText] = useState('Converted text');
    return (
        <main className="w-100 min-vh-100 d-flex  flex-column justify-content-center align-items-center mt-4">
            <div className="container mt-4">
                <h1> {props.title}</h1>
                <textarea className="w-50 mh-50" id="input" value={intText} onChange={onChange} placeholder="Enter the text here"></textarea>
                <textarea className="w-50 mh-50" value={outText} id="output" disabled></textarea>
            </div>
            <h3 className="mt-3">Convert the text into</h3>
            <br />
            <div className="container d-flex justify-content-center">
                <button onClick={uppercaseButton}>Uppercase</button><button onClick={lowercaseButton}>Lowercase</button>
            </div>
        </main>
    )
}