import React from 'react'
import { data } from 'lib/data'
import Image from 'next/image'
import coderImg from 'public/images/about-1.png'

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center p-cu">
            <div className="flex flex-col items-center justify-center lg:flex-row-reverse lg:px-16 xl:px-20 2xl:px-12">
                <div className="px-4 sm:w-9/12 lg:flex-1 xl:px-12">
                    <h2 className="text-blue-600 uppercase font-bold text-header">
                        {data.about.title}
                    </h2>
                    <p className="text-gray-800 py-2 lg:text-justify text-para">
                        {data.about.paragrah}
                    </p>
                </div>
                <Image
                    src={coderImg}
                    alt="coder illustration"
                    width={400}
                    height={400}
                    className="py-2 lg:flex-1"
                    priority={true}
                />
            </div>
            <div className="px-4 sm:px-14 md:w-8/12 lg:pt-8">
                <h2 className="text-blue-600 text-center font-semibold text-header pb-2">
                    Tech stack
                </h2>
                <div className="flex flex-row flex-wrap justify-center">
                    {data.skills.map(function (item, index) {
                        return (
                            <div key={index} className="py-2 px-2">
                                <div className="flex content-center justify-center">
                                    <item.icon className="text-blue-900" />
                                </div>

                                <p className="text-center text-gray-900 text-para">
                                    {item.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
