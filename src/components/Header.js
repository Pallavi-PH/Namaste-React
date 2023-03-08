import { useState } from "react";
import {Link} from "react-router-dom";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                Food Villa
            </div>
            <ul className="navList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link>Cart</Link>
                </li>
            </ul>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}    
        </div>
    )
}

export default Header;