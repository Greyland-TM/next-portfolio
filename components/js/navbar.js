import React from 'react'
import Link from 'next/link'

const Navbar = () => (
        <div className="navbar">
            <div className="toggle-container">
                <label className="switch">
                    <input  type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <p className="toggle-container__lable">Dark Mode</p>
            </div>

            <ul className="navbar__list">
                <li className="navbar__item"><Link href='/' exact><a className="navbar__link" >Home</a></Link></li>
                <li className="navbar__item"><Link href='/resume' exact><a className="navbar__link" >Resume</a></Link></li>
                {/* <li className="navbar__item"><Link href='/projects' exact><a className="navbar__link" >Projects</a></Link></li> */}
                <li className="navbar__item"><Link href='/contact' exact><a className="navbar__link" >Contact</a></Link></li>
            </ul>
        </div>
);

export default Navbar;