import Link from "next/link"
import React, { useState } from "react"

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
const [nav, setNav] = useState(false)
    const links =[
        {
            id: 1,
            name:'home',
            link: '/'
        },
        // {
        //     id: 2,
        //     name: 'about',
        //     link: 'About'
        // },
        {
            id: 3,
            name: 'products',
            link: 'Products'
        },
        {
            id: 5,
            name: "contact",
            link: 'Contact'
        },
    ]
    return (
    <>
        <div className='bg-pink-200 fixed top-0 w-[100%] z-10'>
            <div className='container w-full mx-auto flex justify-between items-center py-4'>
                <div className=' text-[24px] text-pink-400 px-14 font-semibold'>KiCos</div>

                <ul className="hidden md:flex gap-4 justify-between items-center px-14">
                    <li>
                        <Link href={"/"} className="text-pink-400">
                            Home  
                        </Link>
                    </li>
                    {/* <li>
                        <Link href={"About"} className="text-pink-400">
                            Portofolio
                        </Link>
                    </li> */}
                    <li>
                        <Link href={"products"} className="text-pink-400">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href={"Contact"} className="text-pink-400">
                            Contact
                        </Link>
                    </li>
                </ul>
                
                
                <div onClick={() => setNav(!nav)} className="block cursor-pointer md:hidden text-[24px] text-pink-400 pr-4">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                    {nav && (
                        <>
                        <ul className="flex flex-col justify-center items-center absolute top-14 left-0 w-full h-200 bg-gradient-to-b from-pink-300 to-pink-300 text-white">
                        {links.map(({id, name, link}) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-4 text-2xl"
                                    onClick={() => setNav(!nav)}
                                >
                                <Link href={link}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                        </>
                    )}
            </div>
        </div>
    </>
    )
}

export default Navbar;