import React from 'react';
import {Link} from "react-router-dom";

const MenuItem = ({name, route}) => {
    return (
        <Link to={route}>
            {name}
        </Link>
    );
};

export default MenuItem;