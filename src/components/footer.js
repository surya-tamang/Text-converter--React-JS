import React from "react";

export default function Footer(props) {
    return (
        <footer className="container-fluid">
            <h4 className="text-center">Designed and Developd by <span>{props.developer}</span></h4>
        </footer>
    )
}