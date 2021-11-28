import React from 'react'
import Head from 'next/head'

const Intro = () => {
    return (
        <>
            <Head>
                <title>Nasrah Abraham</title>
                <meta name="keywords" content="Nasrah Abraham developer" />
            </Head>
            <div className="h-screen background1 flex flex-row justify-center items-center">
                <div className="z-40 text-center">
                    <h1></h1>
                    <h2 className="text-2xl">
                        A Front end Developer all about building high quality,
                        high preformance, SEO optimized websites
                    </h2>
                    <button className="border-solid">Contact me</button>
                </div>
            </div>
        </>
    )
}

export default Intro
