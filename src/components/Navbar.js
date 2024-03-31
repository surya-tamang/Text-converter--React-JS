import React from "react";
import propTypes from "react";

export default function Header(props) {
    return (
        <div>
            <header>
                <div className="logo">{props.title}</div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li className="dropdown"><a href="">Category</a>
                            <ul>
                                <li><a href="">Men</a></li>
                                <li><a href="">Women</a></li>
                                <li><a href="">Kid</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

Header.propTypes = {
    title: propTypes.string
}

Header.defaultProps = {
    title: "logo"
}