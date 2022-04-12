import Head from 'next/head'
import Image from 'next/image'
import TeamsCard from '../components/TeamsCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full h-full lg:h-screen bg-black'>
      <div>
          <TeamsCard/>
      </div>
    </div>
  )
}
