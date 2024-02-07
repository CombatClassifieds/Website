import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <SignIn />
      <Search />
      <Navigate />
    </header>
  );
}

function SignIn() {
  return (
    <div className="signin">
      <nav className="username">
        <ul className="navlistsignincontainer">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <a href="#">Sign In</a>
          </li>
          <li>or</li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <img src="./images/logo.png" />
      <input type="text" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <ul className="navlistcheckout">
        <li>
          <FontAwesomeIcon icon={faHeart} />
          wishlist
        </li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          cart
        </li>
      </ul>
    </div>
  );
}

function Navigate() {
  return (
    <div className="navigate">
      <nav className="navBar">
        <ul className="navlistcontainer">
          <li className="navItem">Contact Us</li>
          <li className="navItem">Locations</li>
          <li className="navItem">Shipping, Returns, & Terms</li>
          <li className="navItem">About Us</li>
          <li className="navItem">Size Charts</li>
          <li className="navItem">Accessibility</li>
        </ul>
      </nav>
    </div>
  );
}
