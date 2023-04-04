import React from "react";


class Header extends React.Component {
    render() {
        return (
            <header className="column">
                <div className="logoPlace">
                    <a href="#">
                        <div className="header-logo">  <i className="fa-brands fa-fort-awesome"></i></div>
                        <span className="header-site-name">My Cinema</span>
                    </a>

                </div>
                <div className="loginPlace">
                    <svg strokeWidth="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1141 12.5004C12.1141 11.5109 10.7982 11.2487 10.449 12.1745C9.60449 14.4139 8.98914 16.4172 8.98914 17.5003C8.98914 20.952 11.7874 23.7503 15.2391 23.7503C18.6909 23.7503 21.4891 20.952 21.4891 17.5003C21.4891 16.3366 20.7789 14.1108 19.8372 11.6712C18.6174 8.51099 18.0074 6.93086 17.2545 6.84576C17.0136 6.81852 16.7508 6.86748 16.5359 6.97964C15.8641 7.33016 15.8641 9.05356 15.8641 12.5004C15.8641 13.5359 15.0247 14.3754 13.9891 14.3754C12.9536 14.3754 12.1141 13.5359 12.1141 12.5004Z" fill="#FFC30D" />
                    </svg>
                </div>
            </header>
        )
    }
}

export default Header