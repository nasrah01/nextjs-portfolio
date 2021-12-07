import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import Link from 'next/link'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

const Item = (props) => (
    <li className="pb-6 text-2xl sm:text-base sm:pl-8 sm:pb-0 md:text-lg">
        <Link href={props.location}>
            <a>{props.title}</a>
        </Link>
    </li>
)
const Nav = () => {
    const [toggleViewMode, setToggleMode] = useState(false)
    return (
        <IconContext.Provider value={{ size: '1.5rem' }}>
            <>
                <ul
                    className={`${
                        toggleViewMode
                            ? 'fixed bg-white w-full h-full flex flex-col justify-center items-center'
                            : 'hidden'
                    } sm:flex sm:bg-transparent sm:h-auto sm:flex-row sm:p-3`}
                >
                    <Item title="Home" location="/" />
                    <Item title="Projects" location="/" />
                    <Item title="Contact" location="/" />
                </ul>
                <button
                    className="absolute top-0 right-0 p-2 sm:hidden"
                    onClick={() => setToggleMode(!toggleViewMode)}
                >
                    {toggleViewMode ? <HiX /> : <HiMenuAlt1 />}
                </button>
            </>
        </IconContext.Provider>
    )
}

export default Nav
