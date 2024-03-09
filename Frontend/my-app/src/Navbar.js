import React from 'react';
import './index';
import {Link} from 'react-router-dom';

const Navbar = () => {
return(
<nav className='parent'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <img id='b' src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/11/logo.png" alt='brandlogo'></img>

    <div className="dropdown1">
        <button className="dropbtn"> Home </button>
    </div>

    <div className="dropdown1">
        <button className="dropbtn"> About </button>
    </div>

    <div className="dropdown1">
        <Link to="/Register"><button className="dropbtn"> Register <i className="fa fa-caret-down"></i></button></Link>
        <div className="dropdown-content">
            <Link to="/Admin/SignUp"> ADMIN </Link>
            <Link to="/Teacher/SignIn"> TEACHER </Link>
            <Link to="/Student/SignIn"> STUDENT </Link>
        </div>
    </div>
</nav>
)
}

export default Navbar;
