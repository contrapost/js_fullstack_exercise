/**
 * Created by alexandershipunov on 10/02/2017.
 */

import React from 'react';

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({message}) => {
    return (
        <h2 style={{color}} className="Header text-center">
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};

export default Header;