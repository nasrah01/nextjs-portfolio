import React from 'react'
import { data } from 'lib/data'
const About = () => {
    return (
        <div>
            <div>
                <h2>{data.about.title}</h2>
                <p>{data.about.paragrah}</p>
            </div>
        </div>
    )
}

export default About
