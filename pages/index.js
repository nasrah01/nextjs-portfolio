import React from 'react'
import Intro from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    )
}

export default Home
