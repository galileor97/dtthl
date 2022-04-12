import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='bg-black text-olive fixed top-0 flex flex-col items-center lg:pt-20 pt-20  w-full min-h-screen h-screen lg:px-8 px-6'>
        <div className=' max-w-2xl w-full mx-auto items-center justify-center'>
            <h1 className='text-white text-2xl text-center mb-5 lg:text-5xl font-ragas font-thin lg:mb-10'>A Story from the Great SEA</h1>
            <h1 className='text-gray-400 text-center font-reno tracking-wide text-lg  lg:text-xl lg:max-w-'>
              <b>DTTH Labs </b>
            story begins with a bunch of people with various creative backgrounds in South East Asia. An experienced team with the same ambition to explore, create, & build something cool in web3 spaces
            </h1>
        </div>    
      </div>
    </div>
  )
}
