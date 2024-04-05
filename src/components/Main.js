import React from "react";

export default function Main() {
    return (
        <main className="w-100 min-vh-100 d-flex  flex-column justify-content-center align-items-center mt-4">
            <div className="container">
                <textarea className="w-50 mh-50" id="input" placeholder="Enter the text here"></textarea>
                <textarea className="w-50 mh-50" id="output" disabled></textarea>
            </div>
            <h3 className="mt-3">Convert the text into</h3>
            <br />
            <div className="container d-flex justify-content-center">
                <button>Uppercase</button><button>Lowercase</button>
            </div>
        </main>
    )
}