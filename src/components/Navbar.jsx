import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sunIcon from "../assets/images/sun.png";
import moonIcon from "../assets/images/moon.png";

const Navbar = () => {
    const location = useLocation();

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
            const mainElement = document.querySelector('.main');
            const portfolioElement = document.querySelector('.portfolio');
            const historyElement = document.querySelector('.history');
            const contactsElement = document.querySelector('.contacts');
            
            if (mainElement) mainElement.classList.remove('main--shifted');
            if (portfolioElement) portfolioElement.classList.remove('portfolio--shifted');
            if (historyElement) historyElement.classList.remove('history--shifted');
            if (contactsElement) contactsElement.classList.remove('contacts--shifted');
        }
    }, [location.pathname]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        const mainElement = document.querySelector('.main');
        const portfolioElement = document.querySelector('.portfolio');
        const historyElement = document.querySelector('.history');
        const contactsElement = document.querySelector('.contacts');
        
        if (isOpen) {
            if (mainElement) mainElement.classList.remove('main--shifted');
            if (portfolioElement) portfolioElement.classList.remove('portfolio--shifted');
            if (historyElement) historyElement.classList.remove('history--shifted');
            if (contactsElement) contactsElement.classList.remove('contacts--shifted');
        } else {
            if (mainElement) mainElement.classList.add('main--shifted');
            if (portfolioElement) portfolioElement.classList.add('portfolio--shifted');
            if (historyElement) historyElement.classList.add('history--shifted');
            if (contactsElement) contactsElement.classList.add('contacts--shifted');
        }
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <div className="sidebar__navbar">
                <button onClick={toggleNavbar} className="sidebar__toggle-btn">
                    {isOpen ? "Close" : "Menu"}
                </button>
                <img 
                    src={theme === 'light' ? sunIcon : moonIcon} 
                    alt="Theme Toggle" 
                    onClick={toggleTheme} 
                    className="sidebar__theme-toggle-img"
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>
                <ul className="navbar__list">
                    <li>
                        <NavLink to="/" className="navbar__list-link">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="navbar__list-link">PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" className="navbar__list-link">HISTORY</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className="navbar__list-link">CONTACTS</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
