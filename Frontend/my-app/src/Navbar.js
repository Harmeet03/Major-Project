import React from 'react';
import './index';
import {Link} from 'react-router-dom';

const Navbar = () => {
return(
<nav className='parent'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <img id='b' src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/11/logo.png" alt='brandlogo'></img>

    <div className="dropdown1">
        <button className="dropbtn">Home <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
            <Link to="/Rumala">Rumala Sahib</Link>
            <Link href="">Chattar Sahib</Link>
            <Link href="">Chaur Sahib</Link>
        </div>
    </div>

    <div className="dropdown1">
        <button className="dropbtn">Courses <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
            <Link to="/Rumala">Rumala Sahib</Link>
            <Link href="">Chattar Sahib</Link>
            <Link href="">Chaur Sahib</Link>
        </div>
    </div>

    <div className="dropdown1">
        <button className="dropbtn">Instructors <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
            <Link to="/Rumala">Rumala Sahib</Link>
            <Link href="">Chattar Sahib</Link>
            <Link href="">Chaur Sahib</Link>
        </div>
    </div>
</nav>
)
}

export default Navbar;
