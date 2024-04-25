import React from 'react';
import './index';
import './index.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
return(
<nav className='parent'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <img id='b' src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/11/logo.png" alt='brandlogo'></img>

    <div className="dropdown1">
        <button className="dropbtn" style={{color: "black"}}> Home </button>
    </div>

    <div className="dropdown1">
        <button className="dropbtn" style={{color: "black"}}> About </button>
    </div>

    <div className="dropdown1">
        <Link to="/Register" style={{color: "black"}}><button className="dropbtn"> Register <i className="fa fa-caret-down"></i></button></Link>
    </div>
</nav>
)
}

export default Navbar;
