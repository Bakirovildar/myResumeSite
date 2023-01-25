import React, {useEffect, useRef} from "react";
import './header.css'
import {Container} from "reactstrap";

import imgLogo from '../../assests/Лого.png'

const navLinks = [
    {display: 'Главная', url: '#home'},
    {display: 'Обо мне', url: '#about'},
    {display: 'Услуги', url: '#services'},
    {display: 'Портфолио', url: '#portfolio'},
    {display: 'Контакт', url: '#contact'},
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header__shrink')
            } else {
                headerRef.current.classList.remove('header__shrink')
            }
            return () => {
                window.removeEventListener('scroll')
            }
        })

    }, [])

    const menuToggle = () => menuRef.current.classList.toggle('menu__active')

    const handleClick = (e) => {
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 70
        })
    }

    return <header className='header' ref={headerRef}>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h5>
                        <img src={`${imgLogo}`} alt="" style={{width: '135px'}}/>
                    </h5></div>
                <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav__list">
                        {navLinks.map((link, index) => {
                            return <li className="nav__item" key={index}>
                                <a href={link.url} onClick={handleClick}>{link.display}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="nav__right d-flex align-items-center gap-4">
                    <button
                        className="btn">89677394777
                    </button>
                    <span className="mobile__menu"><i className="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>

    </header>
}

export default Header
