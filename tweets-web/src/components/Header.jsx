import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logotype">
                TweetMe
                </div>
            <nav className="header__navbar">
                <ul>
                    <li><a href="#">Option</a></li>
                    <li><a href="#">Option</a></li>
                    <li><a href="#">Option</a></li>
                    <li><a href="#">Option</a></li>
                    <li><a href="#">Option</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header