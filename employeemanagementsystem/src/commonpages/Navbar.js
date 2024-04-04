import React from 'react';

function Navbar({title}) {
    return (
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">{title}</a>
            </nav>
        </div>
    );
}

export default Navbar;