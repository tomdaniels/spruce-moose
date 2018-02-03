import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';

const Header = (props) => (
    <div className="header__wrap">
        <div className="container">
            <div className='header__title-wrap'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="header__title">{props.title}</h1>
                </Link>
                {
                    props.subtitle &&
                    <h2 className="header__subtitle">{props.subtitle}</h2>
                }
                <NavBar />
            </div>
        </div>
    </div>
);

export default Header;