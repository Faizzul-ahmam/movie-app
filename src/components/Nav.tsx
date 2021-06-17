import "../style/Nav.scss";
import { imageList } from "../img";

export const Nav = () => 
<div className="Nav-container">
    <div className="Nav-logo">
        <a href="#"><img src={imageList.logo} alt="logo"/></a>
    </div>
    <div className="Nav-items">
        <a href="#">Hi Faizzul !</a>
    </div>
</div>;


