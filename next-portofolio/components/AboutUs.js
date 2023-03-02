import React from 'react'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div className="container mx-auto py-10 px-4" id='aboutus'>
            <div className='pl-8'>
            <Heading title="About KiRentCos" />
            </div>
        <div className="max-w-[800px] pl-8">
            <p className="text-gray-700 text-[20px]">
            Ki Rental Cosplay & Jual Kostum mempunyai produk kostum Cosplay dengan brand terbaik. 
            Seperti Brand Uwowo, Manmei, Delusion, DokiDoki-R
            </p>
        </div>
        </div>
        </>
    )
}

export default AboutUs