import React from 'react';

const Navbar = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/#" className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"/></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="../../index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/#" className="nav-link">Contact</a>
                </li>

                {/*SEARCH FORM*/}
                <form class="form-inline ml-3">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                    </div>
                </form>
            </ul>
        </nav>
    )
}

export default Navbar;