import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component{

    render(){
        return(
            <div className="notFound first-block column">
                <h1>Упс... Страница не найдена...</h1>
                <Link to={'/'}><span>Перейти на главную</span></Link>
            </div>
        )
    }
}

export default NotFound