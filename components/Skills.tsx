import React from 'react'
import { data } from 'lib/data'

const Skills = () => {
    return (
        <div className='pb-6 px-4'>
            <h2 className='font-semibold pb-2 text-center text-lg'>Tech stack</h2>
            <div className="flex flex-row flex-wrap justify-center">
                {data.skills.map(function (item, index) {
                    return (
                        <div key={index} className='py-2 px-2'>
                            <div className="flex content-center justify-center">
                                <item.icon />
                            </div>

                            <p className='text-center'>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
