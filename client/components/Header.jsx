export default function Header() {
    return (
        <header className="header">
            <div className="signin">
                <nav className="username">
                    <ul className="navlistsignincontainer">
                        <li><a href="#">Sign In</a></li>
                        <li>or</li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </nav>
            </div>
            <div className="search">
                <img src="../../images/Combat-Classifed.png"/>
                <h1>Combat Classifieds</h1>
                <input type="search" />
                <button>Search</button>
                <ul className="navlistcheckout">
                    <li>wishlist</li>
                    <li>cart</li>
                </ul>
            </div>
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
        </header>
    );
}

