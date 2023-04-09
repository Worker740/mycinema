import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <header className="column">
                <div className="logoPlace">
                    <Link to="/">
                        <div className="header-logo">  <i className="fa-brands fa-fort-awesome"></i></div>
                        <span className="header-site-name">My Cinema</span>
                    </Link>

                </div>
                <div className="loginPlace">
                    
                </div>
            </header>
        )
    }
}

export default Header