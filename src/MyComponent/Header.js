import React from 'react'
import Images from '../Images/images'
import './Navbar.css'

function Header() {
   
    return (
        <div className="site-header" id="header">
            <div className="container">
                <div className="hdr-links">
                <div className="hdr-logo">
                    <a href='/' className="logo" ><img className="logo-image" src={Images.logo} alt='w' /></a>
                </div>
                <div className="header-links-wrapper">
                    <a href='/' className="hdr-link">today</a>
                    <a href='/' className=" active hdr-link">Courses</a>
                    <span className="hdr-link">practice</span>
                    <div className="hdr-search"></div>
                    <div className="hdr-login">
                        <a href='/' className="btn login-link">Log in</a>
                        <a href='/' className="btn signup-btn">Sign up</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Header
