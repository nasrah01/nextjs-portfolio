import React from 'react'
import Image from 'next/image'

const Work = ({ projects }) => {
    return projects.map((item) => {
        return (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Image
                    src={item.images[0].url}
                    width={300}
                    height={180}
                    alt="image of website"
                />
                <a href={item.code}>code</a>
                <a href={item.website}>website</a>
            </div>
        )
    })
}

export default Work
