import React from 'react'
import Heading from '../Heading'

const Skills = () => {
    return (
        <section className='container mx-auto py-10 px-4'>
        <div className='pl-8'>
        <Heading title="Skills" />
        
            <p className='text-grey-600 -mt-auto mb-10'>
            Ini beberapa skill ku yawwww
            </p>

        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pl-8'>
                <div>
                    <p>Cooking</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[65%] pb-2'>
                        </div>
                    </div>

                    <p>Design Canva</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2' >
                        <div className='bg-pink-400 absolute h-[4px] w-[80%] pb-2'>
                        </div>
                    </div>

                    <p>Design Figma</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[50%] pb-2'>
                        </div>
                    </div>

                    <p>Drawing</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[75%] pb-2'>
                        </div>
                    </div>

                    <p>Singing</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[65%] pb-2'>
                        </div>
                    </div>


                    <p>Sleeping</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2 pb-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[95%] pb-2'>
                        </div>
                    </div>
                </div>
                </div>

        </section>
    )
}

export default Skills