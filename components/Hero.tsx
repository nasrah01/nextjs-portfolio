import React from 'react'
import Head from 'next/head'
import { data } from 'lib/data'
import Image from 'next/image'
import heroImg from '../public/images/hero.png'

const Intro = () => {
    return (
        <>
            <Head>
                <title>Nasrah Abraham</title>
                <meta name="keywords" content="Nasrah Abraham developer" />
            </Head>
            <div className="h-screen background1 md:flex md:justify-center">
                <div className="flex flex-col justify-center items-center pt-32 pb-10 px-16 sm:pt-48 md:flex-row md:pt-10">
                    <div className="z-40 text-center pb-5 md:w-9/12 md:pb-0 md:text-left">
                        <h2 className="text-xl pb-4 sm:text-2xl">
                            {data.bio.title} <br /> {data.bio.quality} <br /> {data.bio.performance}
                            <br /> {data.bio.optimize}
                        </h2>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">
                            <a href={data.bio.email}>Contact me</a>
                        </button>
                    </div>
                    <div className="z-40">
                        <Image
                            src={heroImg}
                            alt="illustration"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
