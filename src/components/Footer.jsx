
import {  BsTwitterX, BsYoutube , BsFacebook, BsInstagram} from "react-icons/bs";
import "../styles/header.css";


export default function Footer(){


    return(
        <header className=" py-3">
            <div className="container-xxl ">
                <div className="d-flex fotter-bottom justify-content-between">
                   <h2 className="header-h1"> </h2>
             
                    <div className="redes-socias">
                        <BsTwitterX className="aumentarFonte" />
                        <BsYoutube className="aumentarFonte" />
                        <BsFacebook className="aumentarFonte" />
                        <BsInstagram className="aumentarFonte" />
                       

                    </div>
             </div>
            </div>
        </header>
    )
}