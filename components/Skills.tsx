import React from 'react'
import { data } from 'lib/data'

const Skills = () => {
    return (
        <div>
            <h2>Tech stack</h2>
            <div className="flex flex-row flex-wrap">
                {data.skills.map(function (item, index) {
                    return (
                        <div key={index}>
                            <item.icon />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
