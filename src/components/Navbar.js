import React from "react";
import propTypes from "react";

export default function Header(props) {
    return (
        <nav class="navbar bg-dark border-bottom navbar-expand-lg position-fixed w-100 top-0" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Men</a></li>
                                <li><a className="dropdown-item" href="#">Women</a></li>
                                <li><a className="dropdown-item" href="#">Kids</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>/
        </nav>
    )
}

Header.propTypes = {
    title: propTypes.string
}

Header.defaultProps = {
    title: "logo"
}