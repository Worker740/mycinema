import React from "react";
import { Link } from 'react-router-dom';



class Menu extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <Link to="/" >
                    <div className="header-logo">  <i className="fa-brands fa-fort-awesome"></i></div>
                </Link>
                <Link to="/movies">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4584" cy="11.4583" r="7.29167" strokeWidth="2" />
                        <path d="M11.4583 8.33334C11.0479 8.33334 10.6416 8.41417 10.2624 8.57122C9.88328 8.72827 9.53879 8.95845 9.2486 9.24863C8.95842 9.53882 8.72824 9.88332 8.57119 10.2625C8.41414 10.6416 8.33331 11.048 8.33331 11.4583" strokeWidth="2" strokeLinecap="round" />
                        <path d="M20.8333 20.8333L17.7083 17.7083" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </Link>

            </div>
        )
    }
}

export default Menu