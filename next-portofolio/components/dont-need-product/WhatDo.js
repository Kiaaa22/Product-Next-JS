import React from 'react'
import Heading from '../Heading'

import {GoPencil} from 'react-icons/go'
import {IoMdMicrophone} from 'react-icons/io'
import {RiLightbulbFlashFill} from 'react-icons/ri'
import Navbar from '@/components/Navbar'

const WhatDo = () => {
    return (
    <>
    <Navbar />
    <section className='container mx-auto py-10 px-4' id="portofolio" >
        <div className='pl-8'>
        <Heading title="What I Do" />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pl-8'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <RiLightbulbFlashFill className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Design</h2>
                <p>Aku biasanya menggunakan Canva dan Figma untuk melakukan desain
                    tapi skill ku dalam melakukan desain belum terlalu baik. Beberapa 
                    hasil desainku ada di bagian Creation.
                </p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <GoPencil className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Drawing</h2>
                <p>Aku sering menghabiskan waktu dengan menggambar. Aku 
                    menggambar secara digital dengan menggunakan ibisPaint, 
                    aku juga bisa menggambar tradisional. Aku juga pernah membuat 
                    kaligrafi di kanvas dan beberapa gambarku ada di bagian Creation.
                </p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <IoMdMicrophone className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Singing</h2>
                <p>Aku sering menyanyi ketika merasa kosong dan sepi, 
                    lagu yang aku pilih juga sesuai dengan perasaanku ntah 
                    sedih maupun senang. Aku menyanyi juga untuk menumpahkan 
                    perasaanku yang tak terbendung. Karena aku suka menyanyi 
                    jadi aku mengikuti ekskul paduan suara di sekolah.
                </p>
            </div>
        </div>
    
    </section>
    </>
    )
    }

export default WhatDo