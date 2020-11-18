import React from 'react';
import Taco from '../img/taco.png';

function Header(props) {
    return (
        <>
        <div id="header">
            <img className="logo" src={Taco} title="Taco logo" alt="Taco logo" />
            <h1>Taco Tracker</h1>
            <img className="logo" src={Taco} title="Taco logo" alt="Taco logo" />
        </div>
        </>
    )
}

export { Header };