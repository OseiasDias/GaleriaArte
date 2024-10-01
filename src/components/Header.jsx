import { BsFillBrushFill } from "react-icons/bs";
import "../styles/header.css";
import { Link } from "react-router-dom";
import ModalInfo from "./ModalInfo";
export default function Header(){


    return(
        <header className="position-fixed header-principal py-3">
            <div className="container-xxl ">
                <div className="d-flex header-top justify-content-between">
                  <Link to="/" ><h2 className="header-h1">Galleria <span>de Arte Dias</span> <BsFillBrushFill className="header-pincel"/></h2>
                  </Link>
                  <div>
                  <ModalInfo />
                  </div>
                </div>
            </div>
        </header>
    )
}