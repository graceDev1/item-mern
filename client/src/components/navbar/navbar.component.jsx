import React from 'react';
import { navdata } from './navData';
import { Link } from 'react-router-dom';
import './navbar.component.css';

function NavBar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link class="navbar-brand fst-italic" to="/">SHOPPING ITEM</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end float-left" id="navbarColor02">
        <ul class="navbar-nav">
            {navdata.map((navitem, index)=>(
                 <li className={navitem.class} key={index}>
                    <Link className="nav-link" to={navitem.route}>{navitem.title}
                 </Link>
                 </li>
            ))}
            <li className="nav-item">
                <Link to="#" className="btn btn-primary">LogOut</Link>
            </li>
        </ul>
    </div>
        </div>
   
</nav>
    )
}

export default NavBar
