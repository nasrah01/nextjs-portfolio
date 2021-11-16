import Head from 'next/head'
import Image from 'next/image'
import hero from '../public/images/hero.jpg'

const Intro = () => {
  return (
    <>
    <Head>
      <title>Nasrah Abraham</title>
      <meta name='keywords' content='Nasrah Abraham developer' />
    </Head>
    <div className='h-screen background1 flex flex-col justify-center items-center'>
      <div className='z-10 text-center'>
        <h1 className='text-4xl'>Nasrah Abraham</h1>
        <h2>A Front end Developer all about developing creative, inspiring, trending user friendly UI/UX</h2>
      </div>
      {/* <div className='z-10 h-4/5'>
        <Image src={hero} alt='Woman and code' placeholder='blur' />
      </div> */}
    </div>
    </>
  )
}

export default Intro