import React from 'react'
import { data } from 'lib/data'
import Image from 'next/image'

const Work = () => {
    return (
        <div>
            <h2>Projects</h2>
            {data.projects.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Image
                            src={`/${item.image}`}
                            alt={`${item.title} website`}
                            width={500}
                            height={300}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Work
