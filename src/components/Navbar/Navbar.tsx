import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <a href="home">
            <i
              className="fa-solid fa-house-chimney"
              role="navigation"
              aria-label="Home"
            ></i>
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="create">
            <i
              className="fa-regular fa-plus"
              role="navigation"
              aria-label="Create an Event"
            ></i>
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="myList">
            <i
              className="fa-regular fa-rectangle-list"
              role="navigation"
              aria-label="My Events List"
            ></i>
          </a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
