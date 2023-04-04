import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <footer className="column">
                <div className="logoPlace">
                    <a href="#">
                        <div className="footer-logo">  <i className="fa-brands fa-fort-awesome"></i></div>
                        <span className="footer-site-name">My Cinema</span>
                    </a>

                </div>
                <div className="copirightPlace">
                    <span>© 2022, Tvimo, может содержать информацию, не предназначенную для несовершеннолетних</span>
                </div>
                <div className="linksPlace">
                    <a href="#"><span className="footer-links-name">Задать вопрос</span></a>
                    <a href="#"><span className="footer-links-name">Справка</span></a>
                </div>
            </footer>
        )
    }
}

export default Footer