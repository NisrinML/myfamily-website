"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
const Navbar = () => {
    const navLinks = [
        { title: "تعرف علينا", href: "#About" },
        { title: "خدماتنا", href: "#Goals" },
        { title: "مبادراتنا", href: "#Projects" },
        { title: "اتصل بنا", href: "#Contact" },
    ]
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className={`fixed top-0 right-0 left-0 z-10 bg-[#d2edd0] ${navbarOpen?'bg-opacity-100':'bg-opacity-70'}`}>
            <div className='flex flex-wrap items-center justify-between mx-auto px-6 my-4'>
                <Link href={"/"} className='w-28 h-12 md:w-32 md:h-16 lg:w-36 lg:h-16 xl:w-40 xl:h-20' >
                 
                                        <Image
                                            src="/images/LogoImage.png"
                                            alt="My Family Logo"
                                            width={160}
                                            height={160}
                                        />
           
                </Link>
                <div className='mobile-menu block  md:hidden'>
                    {
                        navbarOpen ? (<button
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-lightblue-light text-lightblue-light
                        hover:text-darkblue-light hover:border-darkblue-light'>
                            <XMarkIcon className="h-5 w-5" />
                        </button>) :
                            (<button
                                onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-3 py-2 border rounded border-lightblue-light text-lightblue-light
                            hover:text-darkblue-light hover:border-darkblue-light'>
                                <Bars3Icon className="h-5 w-5" />
                            </button>)
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex md:gap-10 md:p-0 md:flex-row mt-0 p-4 '>

                        {navLinks.map((link, index) => {
                            return (<li key={index} className='w-fit'>
                                <NavLink href={link.href} title={link.title} />
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
            {
                navbarOpen&&
                <MenuOverlay links={navLinks}/>
            }
        </nav>
    )
}

export default Navbar 