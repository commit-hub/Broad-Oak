import Head from 'next/head'
import Image from 'next/image'
import OurServices from '../nonReuseableComponents/OurServices'
import Footer from '../reusableComponents/Footer'
import Header from '../reusableComponents/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
     <Header/>
     <OurServices/>
     <Footer/>
    </div>
  )
}
