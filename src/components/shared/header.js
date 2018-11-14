import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/" className="brand">
                    <img src="/images/logo.png" alt="Logo" />
                </Link>

                <ul>
                    <li>
                        <Link to="/teams">Teams</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;