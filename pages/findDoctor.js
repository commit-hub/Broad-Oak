import Head from 'next/head'
import Image from 'next/image'
import AnytimeContactUs from '../nonReuseableComponents/AnytimeContactUs'
import OurDoctors from '../nonReuseableComponents/OurDoctors'
import OurLocation from '../nonReuseableComponents/OurLocation'
import Footer from '../reusableComponents/Footer'
import Header from '../reusableComponents/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
     <Header/>
     <OurDoctors/>
     <AnytimeContactUs/>
     <OurLocation/>
     <Footer/>
    </div>
  )
}
