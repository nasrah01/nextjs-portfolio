import React from 'react'
import { data } from 'lib/data'
import Image from 'next/image'

const Work = () => {
    return (
        <div className="p-cu">
            <h2 className="text-blue-600 text-header text-center uppercase font-bold px-4">
                Projects
            </h2>
            <div className="flex flex-col justify-around lg:flex-row">
                {data.projects.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=" flex justify-center py-6 lg:px-4 2xl:px-8"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <Image
                                    src={`/${item.image}`}
                                    alt={`${item.title} website`}
                                    width={700}
                                    height={450}
                                    priority={true}
                                />
                                <div>
                                    <div className="px-6 py-4">
                                        <h3 className="font-bold text-xl mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <a
                                        href={item.website}
                                        className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                                    >
                                        Website
                                    </a>
                                    <a
                                        href={item.code}
                                        className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
