import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        
            <div>
                <Link to="/LogInForm">
                <h3>Login/SignUp</h3>
                </Link>

            </div>
       
    )
}
export default Header;