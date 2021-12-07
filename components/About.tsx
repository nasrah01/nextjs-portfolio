import React from 'react'
import { data } from 'lib/data'
const About = () => {
    return (
        <div className="py-8 px-4">
            <h2 className="text-blue-600  text-sm uppercase font-bold pb-2">
                {data.about.title}
            </h2>
            <p className="text-base text-gray-800">{data.about.paragrah}</p>
        </div>
    )
}

export default About
