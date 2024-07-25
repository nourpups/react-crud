import {Link} from "react-router-dom";
import {NNavbar} from "../../UI/NNavbar/NNavbar";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <NNavbar id="navbar">
      <Link to="/" className="navbar_links">
        Главная
      </Link>
      <Link to="/about" className="navbar_links">
        О нас
      </Link>
    </NNavbar>
  )
}
