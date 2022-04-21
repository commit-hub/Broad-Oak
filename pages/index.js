import Head from 'next/head'
import Image from 'next/image'
// import Header from './reusableComponents/Header'

import styles from '../styles/Home.module.css'
import Header from '../reusableComponents/Header'
import ContactUs from '../nonReuseableComponents/ContactUs'
import Welcome from '../nonReuseableComponents/Welcome'
import OurServices from '../nonReuseableComponents/OurServices'
import CranbourneStatement from '../nonReuseableComponents/CranbourneStatement'
import OurDoctors from '../nonReuseableComponents/OurDoctors'
import OurBlogs from '../nonReuseableComponents/OurBlogs'
import AnytimeContactUs from '../nonReuseableComponents/AnytimeContactUs'
import OurLocation from '../nonReuseableComponents/OurLocation'
import Footer from '../reusableComponents/Footer'


export default function Home() {
  return (
    <div className=''>
      <Header />
      <ContactUs />
      <Welcome />
      <OurServices />
      <CranbourneStatement />
      <OurDoctors />
      <OurBlogs />
      <AnytimeContactUs />
      <OurLocation />
      <Footer />


    </div>
  )
}
