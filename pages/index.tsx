import React from 'react'
import Intro from 'components/Hero'
import About from 'components/About'
import Projects from 'components/Porjects'
import Contact from 'components/Contact'

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
