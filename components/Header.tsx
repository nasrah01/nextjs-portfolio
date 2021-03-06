import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <div>
            <nav className="flex flex-row justify-between absolute top-0 left-0 w-full z-50 sm:p-4 md:text-lg">
                <div>
                    <p className="p-3 text-header">Nasrah Abraham</p>
                </div>
                <Nav />
            </nav>
        </div>
    )
}

export default Header
