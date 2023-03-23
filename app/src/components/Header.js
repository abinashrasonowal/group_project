import React from 'react'
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

export default function header() {
    return (
        <>
            <div className="container my-3"><h1>Something</h1></div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about/">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/i1/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/i2/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/i3/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <Link className='mx-2' to='/login'><Button variant="outline-dark">Login</Button></Link>{" "}
                        <Link className='mx-3' to='/register'><Button variant="outline-dark">Register here</Button></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
