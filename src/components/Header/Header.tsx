import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='Header'>
            <section>
                <div className="header_logo">
                    <h1>Todo</h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                </nav>
            </section>
        </div>
    )
}
