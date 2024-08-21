import React, { useState } from 'react'
//import {link} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Me',
        path: '/contact-me'
    },
    {
        title: 'Login',
        path: '/login'
    }
];




export default function Navigation ({user}) {
    const [menuActive, setmenuActive] = useState(false);
    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">My Blog</span>
            <div className={`menu-content-container ${menuActive ? 'active' : ""}`}>
                    <ul>
                        { navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                            ))
                        }
                    </ul>
                    <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={(35)}/>
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                    </span>

            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setmenuActive(!true)}/>          

        </nav>
    );
}
