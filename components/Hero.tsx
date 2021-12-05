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
            <div className="h-screen background1 flex flex-col justify-center items-center">
                <div className="z-40 text-center">
                    <h2 className="text-2xl">{data.bio.title}</h2>
                    <button className="border-solid">
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
        </>
    )
}

export default Intro
