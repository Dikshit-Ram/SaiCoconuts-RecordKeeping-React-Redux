import React from 'react';
import {IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <h1>React and Redux in ES6 on Pluralsight</h1>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </nav>
    );
};

export default Header;