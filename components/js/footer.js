import React from 'react'
import  Link  from 'next/link';

const Footer = () => (
    <div className="footer">
        <div className="footer__pageselect">
            <ul className='footer__pageselect--list'>
                <li className="footer__pageselect--item"><Link href='/'><a className='footer__pageselect--link'>Home</a></Link></li>
                <li  className="footer__pageselect--item"><Link  href='/resume'><a className='footer__pageselect--link'>Resume</a></Link></li>
                <li  className="footer__pageselect--item"><Link  href='/contact'><a className='footer__pageselect--link'>Contact</a></Link></li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p className='footer__copyright--text'>&copy; This page was designed and developed entirely by Greyland Miller. 2021 All rights reserved.</p>
        </div>
    </div>
);

export default Footer;