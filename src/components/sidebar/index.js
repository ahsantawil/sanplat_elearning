import React from 'react'

function Sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">
                            Core
                        </div>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt" /> 
                            </div>
                            Dashboard
                        </a>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-columns" />
                            </div>
                        Introduction
                        <div className="sb-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                        </a>
                        <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#">About Sanxing</a>
                                <a className="nav-link" href="#">Internet and LAN</a>
                                <a className="nav-link" href="#">Konfigurasi LAN</a>
                                <a className="nav-link" href="#">Akses Offline</a>
                                <a className="nav-link" href="#">Akses Online</a>
                                <a className="nav-link" href="#">How to Using</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                Sanplat Prepayment
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#">Introduction</a>
                                <a className="nav-link" href="#">Setup General</a>
                                <a className="nav-link" href="#">Setup Administrator</a>
                                <a className="nav-link" href="#">Setup Technical</a>
                                <a className="nav-link" href="#">Setup Sales</a>
                                <a className="nav-link" href="#">Setup General/BM</a>
                                <a className="nav-link" href="#">Register kWh Meter</a>
                                <a className="nav-link" href="#">Manage Token</a>
                                <a className="nav-link" href="#">Token Engineering</a>
                                <a className="nav-link" href="#">Register Merchant</a>
                                <a className="nav-link" href="#">Vending and Pos</a>
                                <a className="nav-link" href="#">Backup database</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="sb-nav-link-icon"><i className="fas fa-network-wired" /></div>
                                kWh Meter
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="collapseThree" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#">Introduction CSI11</a>
                                <a className="nav-link" href="#">How to using</a>
                                <a className="nav-link" href="#">How to handle</a>
                                <a className="nav-link" href="#">Problem kWh Meter</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Administrator
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
