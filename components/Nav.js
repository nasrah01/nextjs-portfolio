import React, { useState } from 'react';
import Link from 'next/link'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

const Item = props => <li className='pb-6 text-2xl sm:text-lg sm:pr-8 sm:pb-0'><Link href={props.location}><a>{props.title}</a></Link></li>;
const Nav = () => {
  const [toggleViewMode, setToggleMode] = useState(false);
  return (
    <>
      <ul className={`${toggleViewMode ? 'fixed bg-white w-full h-full flex flex-col justify-center items-center' : 'hidden'} sm:flex sm:bg-transparent sm:h-auto sm:flex-row`}>
        <Item title='Home' location='/' />
        <Item title='Projects' location='/projects' />
        <Item title='Contact' location='/contact' />
      </ul>
      <button className='absolute top-0 right-0 z-50 p-2 sm:hidden' onClick={() => setToggleMode(!toggleViewMode)}>
        {toggleViewMode ? <HiX /> : <HiMenuAlt1 />}
      </button>
    </>
  )
}

export default Nav
