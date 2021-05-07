import { Link } from "react-router-dom";

export default function MenuLi(props) {
    return(
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><Link to={props.url}>{props.nom}</Link></a>
        </li>
    )
}