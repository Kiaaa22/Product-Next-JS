import React from 'react'
import Heading from '../Heading'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const Creation = () => {
    return (
        <>
        <Navbar />
        <section className='container mx-auto py-10 px-4' id="creation">
        <div className='pl-8'>
        <Heading title="Creation" />
        </div>

        <div className='grid grid-cols-3 gap-4 ml-8'>
            <div className='row-span-2 relative group'>
                <Image src="/oc full.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' /> 
            </div>

            <div className='relative group'>
                <Image src="/oc half happy.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/oc half sad.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/ayam.png" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/ayo masak.png" width="1000" height="100" alt="" className='border-4 border-zinc-300 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/padoru.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/project p5.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

            <div className='relative group'>
                <Image src="/oc sun flower.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200 rounded-3xl' />
            </div>

        </div>
        </section>
        </>
    )
}

export default Creation;