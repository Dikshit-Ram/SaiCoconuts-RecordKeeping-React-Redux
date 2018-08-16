import React from 'react';
import {IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <h1>Welcome to Sai coconut record keeping</h1>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </nav>
    );
};

export default Header;