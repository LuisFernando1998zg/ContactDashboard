import React, { useState } from 'react';
import LogoGlobant from '../../assets/LogoGlobant.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Form } from '../Form/Form';
import bars from '../../assets/bars.svg';

const Navbar = () => {
    const [showForm, setShowForm] = useState(false);

    const clickOnButtonForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <nav className="navbar" aria-label="Main Navigation">
                <figure className="navbar__figure">
                    <Link to='/' className="navbar__link" aria-label="Home">
                        <img src={LogoGlobant} alt="Globant Logo" className="navbar__figure__img" />
                    </Link>
                </figure>
                <input type="checkbox" id='checkboxbar' className='burgermenu' />
                <label htmlFor="checkboxbar" className='burgermenu burgermenu--dropdown' role='button' aria-label="Open menu">
                    <figure className="navbar__figure navbar__figure--bars">
                        <img src={bars} alt="Dropdown menu" className='navbar__figure__img navbar__figure__img--bars' />
                    </figure>
                </label>
                <ul className='navbar__menu'>
                    <li className='navbar__menu__item'>
                        <Link to='/' className="navbar__link" aria-label="Overview">Overview</Link>
                    </li>
                    <li className='navbar__menu__item'>
                        <Link to='/contacts' className="navbar__link" aria-label="Contacts">Contacts</Link>
                    </li>
                    <li className='navbar__menu__item'>
                        <Link to='/favorites' className="navbar__link" aria-label="Favorites">Favorites</Link>
                    </li>
                    <li className='navbar__menu__item'>
                        <button className='navbar__button' onClick={clickOnButtonForm} aria-expanded={showForm} aria-controls="form-section" aria-label="Add new contact">
                            <article className='navbar__button--new'>
                                <span className='navbar__button--plus'>+</span><span>NEW</span>
                            </article>
                        </button>
                    </li>
                </ul>
            </nav>
            {showForm && <Form id="form-section" />}
        </>
    );
}

export default Navbar;