import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../reusableComponents/Header'
import Footer from '../reusableComponents/Footer'
import AnytimeContactUs from '../nonReuseableComponents/AnytimeContactUs'
export default function appointment() {
    const router = useRouter()
  return (
    <div>
        <Header/>
        <AnytimeContactUs/>
        <Footer/>
    </div>
  )
}
