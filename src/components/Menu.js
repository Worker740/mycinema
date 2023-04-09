import React from "react";
import { Link } from 'react-router-dom';



class Menu extends React.Component {
    render() {
        return (
            <div className="nav-menu">
                <Link to="/" >
                    <div className="header-logo">  <i className="fa-brands fa-fort-awesome" ></i></div>
                </Link>
                <Link to="/movies">
                    <svg className="moviesLogo" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4584" cy="11.4583" r="7.29167" strokeWidth="2" />
                        <path d="M11.4583 8.33334C11.0479 8.33334 10.6416 8.41417 10.2624 8.57122C9.88328 8.72827 9.53879 8.95845 9.2486 9.24863C8.95842 9.53882 8.72824 9.88332 8.57119 10.2625C8.41414 10.6416 8.33331 11.048 8.33331 11.4583" strokeWidth="2" strokeLinecap="round" />
                        <path d="M20.8333 20.8333L17.7083 17.7083" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </Link>
                <Link to="/favorites">
                    <svg className="favoritesLogo" strokeWidth="28" height="27" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1141 12.5004C12.1141 11.5109 10.7982 11.2487 10.449 12.1745C9.60449 14.4139 8.98914 16.4172 8.98914 17.5003C8.98914 20.952 11.7874 23.7503 15.2391 23.7503C18.6909 23.7503 21.4891 20.952 21.4891 17.5003C21.4891 16.3366 20.7789 14.1108 19.8372 11.6712C18.6174 8.51099 18.0074 6.93086 17.2545 6.84576C17.0136 6.81852 16.7508 6.86748 16.5359 6.97964C15.8641 7.33016 15.8641 9.05356 15.8641 12.5004C15.8641 13.5359 15.0247 14.3754 13.9891 14.3754C12.9536 14.3754 12.1141 13.5359 12.1141 12.5004Z" />
                    </svg>
                </Link>

            </div>
        )
    }
}

export default Menu