import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
function Header() {

    return (
        <header>
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <NavLink
                            to='/'
                            className="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"

                        >
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </NavLink>
                        <NavLink to='Books' className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-book fa-fw me-3"></i><span>Books</span>
                        </NavLink>

                        <NavLink to="Author" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-pen fa-fw me-3"></i><span>Author</span>
                        </NavLink>
                        <NavLink to="AddData" className="list-group-item list-group-item-action py-2 ripple" >
                            <i className="fas fa-circle-plus fa-fw me-3"></i><span>Add Data</span>
                        </NavLink>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple disabled"
                        ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span></a
                        >
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple disabled"
                        ><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
                        >
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple disabled"
                        ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a
                        >
                    </div>
                </div>
            </nav>
            {/* <!-- Sidebar --> */}

            {/* <!-- Navbar --> */}
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler btn btn-primary shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <h1>Library</h1>
                    {/* <!-- Right links --> */}
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        {/* <!-- Notification dropdown --> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bell"></i>
                                <span className="position-absolute start-90 translate-middle badge border border-light rounded-circle bg-danger p-1">1</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Some news</a></li>
                                <li><a className="dropdown-item" href="#">Another news</a></li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else</a>
                                </li>
                            </ul>
                        </li>

                        {/* <!-- Avatar --> */}
                        <li className="nav-item dropdown">
                            <a
                                data-bs-dropdown className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src=""
                                    className="rounded-circle"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end position-absolute"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}

        </header>

    )
}

export default Header