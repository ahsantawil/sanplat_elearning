import React from 'react'

function Headers() {
    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Citra Sanxing Indonesia </a>
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                                
                </form>
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user fa-fw" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">Profiles</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Headers
