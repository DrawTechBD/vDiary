import React from "react";
import {Link} from 'react-router-dom';
function Sidebar () {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="../../index3.html" className="brand-link">
                <img src="/img/diary.svg"
                     alt="AdminLTE Logo"
                     className="brand-image img-circle elevation-3"
                     style={{opacity: .8}}/>
                    <span className="brand-text font-weight-light">vDiary</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/img/user.jpg" className="img-circle elevation-2" alt="User"/>
                    </div>
                    <div className="info">
                        <a href="/#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <Link to="/movie" className="nav-link"><i className="nav-icon fas fa-film"/>Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/songs" className="nav-link"><i className="nav-icon fas fa-music"/>Songs</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link"><i className="nav-icon fas fa-book"/>Books</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link"><i className="nav-icon fas fa-plane"/>Tour & Travels</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link"><i className="nav-icon fas fa-heart"/>Hobbies & Interests</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link"><i className="nav-icon fas fa-address-book"/>Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;