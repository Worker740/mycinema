import React from "react";
import { Link } from "react-router-dom";


class Footer extends React.Component {
    render() {
        return (
            <footer className="column">
                <div className="logoPlace">
                    <Link to="/">
                        <div className="header-logo">  <i className="fa-brands fa-fort-awesome"></i></div>
                        <span className="header-site-name">My Cinema</span>
                    </Link>

                </div>
                <div className="copirightPlace">
                    <span>© 2022, MyCinema, может содержать информацию, не предназначенную для несовершеннолетних</span>
                </div>
                <div className="linksPlace">
                    <Link to="movies">
                        <span className="footer-links-name">Найти фильм</span>
                    </Link>

                    <Link to="movie">
                        <span className="footer-links-name">Not Found</span>
                    </Link>
                    
                </div>
            </footer>
        )
    }
}

export default Footer