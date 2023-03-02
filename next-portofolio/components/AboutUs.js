import React from 'react'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div className="container mx-auto py-10 px-4" id='aboutus'>
            <div className='pl-8'>
            <Heading title="About KiCos" />
            </div>
        <div className="max-w-[800px] pl-8">
            <p className="text-gray-700 text-[20px]">
            Welcome to KiCos!</p>
            <p>
            We aim to offer our customers a variety of the latest Costume. 
            We've come a long way, so we know exactly which direction to take when 
            supplying you with high quality yet budget-friendly products. We offer 
            all of this while providing excellent customer service and friendly support.
            We always keep an eye on the latest trends in Costume and put our customers' 
            wishes first. That is why we have satisfied customers all over the world, and 
            are thrilled to be a part of the Costum industry.
            The interests of our customers are always top priority for us, so we hope you will 
            enjoy our products as much as we enjoy making them available to you.
            </p>
        </div>
        </div>
        </>
    )
}

export default AboutUs