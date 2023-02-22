import { useState } from "react";

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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