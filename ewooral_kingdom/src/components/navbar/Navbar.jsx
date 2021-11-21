import React from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <section className="gpt3__navbar">
            <figure className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src="{logo}" alt="" />
                </div>
            </figure>
        </section>
    )
}

export default Navbar
