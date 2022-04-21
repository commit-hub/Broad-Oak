import React from 'react'
import SectionHeader from '../reusableComponents/SectionHeader'
import OurDoctor from './OurDoctor'

export default function OurDoctors() {
  return (
    <div className='my-10'>
      
      <SectionHeader p1={'Our'} p2={'Doctors'} />
        
        
        <div className='border-b w-[88%] mx-auto Our-Doctors mt-5'>
            <ul className='Our-Doctors-List md:flex md:space-x-2 md:text-left text-center'>
                <li className='pb-3 px-5'><a href='#' visited>All</a></li>
                <li className='pb-3 px-5'><a href='#'>Cardiologist</a></li>
                <li className='pb-3 px-5'><a href='#'>Dentists</a></li>
                <li className='pb-3 px-5'><a href='#'>General Physicians</a></li>
            </ul>
        </div>
        <div className='flex flex-wrap justify-center w-[88%] mx-auto'>
            {[...Array(8)].map((_,i)=>(
            <OurDoctor Designation={'General Physician'} Name={'Dr. Naaz Randhawa'} Src={`https://picsum.photos/300/${300+i}`}/>

            ))}
        </div>
    </div>
  )
}
