import React from 'react'
import {link} from 'react-router-dom'
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
    const { FirstName, LastName } = user;
    return (
        <nav className="site-navigation">
            <span className="menu-title">My Blog</span>
            <div className="menu-content-container">
                    <ul>
                        { navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                            ))
                        }
                    </ul>
                    <span>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={(39)}/>
                    <span className="menu-avatar-name">(${user.FirstName} ${user.LastName})</span>
                    </span>          

            </div>
        </nav>
    );
}
