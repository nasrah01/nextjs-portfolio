import React from 'react'
import { data } from 'lib/data'
import Image from 'next/image'

const Work = () => {
    return (
        <div>
            <h2 className="text-blue-600 text-sm uppercase font-bold px-4">
                Projects
            </h2>
            <div className="md:flex flex-row justify-center">
                {data.projects.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=" flex justify-center py-6"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <Image
                                    src={`/${item.image}`}
                                    alt={`${item.title} website`}
                                    width={700}
                                    height={450}
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
