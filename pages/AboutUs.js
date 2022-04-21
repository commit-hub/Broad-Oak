import Head from 'next/head'
import Image from 'next/image'
import AnytimeContactUs from '../nonReuseableComponents/AnytimeContactUs'
import ContactUs from '../nonReuseableComponents/ContactUs'
import CranbourneStatement from '../nonReuseableComponents/CranbourneStatement'
import Footer from '../reusableComponents/Footer'
import Header from '../reusableComponents/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <ContactUs/>
      <CranbourneStatement/>
      <AnytimeContactUs/>
      <Footer/>
    </div>
  )
}
