import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/home">TaskMaster</Link>
            </div>
            <div className="navbar-links">
                <Link to="/home" className="btn-home">Home</Link>
                <Link to="/" className="btn-login">
                    {isLoginPage ? 'Login' : 'Logout'}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
