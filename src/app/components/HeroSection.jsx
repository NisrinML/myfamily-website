"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {

    return (
        <section >
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                    className='col-span-7 gap-1 place-self-center md:text-center sm:text-right'>
                    <h1 className="bg-gradient-to-br from-[rgb(22,96,136)] to-[#3BA387] bg-clip-text text-transparent 
               mb-4 text-6xl lg:text-8xl  sm:text-5xl font-extrabold pb-8 md:pb-4 ">مؤسسة عائلتي
                    </h1>

                    <TypeAnimation
                        sequence={[

                            'خدمات مجتمعية',
                            1000,
                            'تنمية وإسكان',
                            1000,
                            'صحة',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2rem', display: 'block', color: '#166088', fontWeight: '600' }}
                        repeat={Infinity}
                    />

                    <p className='text-darkblue-light mb-6 pt-2 text-2xl lg:text-4xl sm:text-xl'>
                        يدٌ تساعد، وقلبٌ يعطف، ومستقبلٌ يُبنى
                    </p>
                    <div>
                        <Link href="#Contact" className='px-6 py-3 rounded-full w-full sm:w-fit ml-4 font-semibold font-sans text-base lg:text-lg bg-gradient-to-br from-[#3BA387] to-[rgb(22,96,136)]
                     text-white-light  hover:bg-bluehover-light hover:text-darkblue-light hover:border hover:border-darkblue-light hover:from-transparent hover:to-transparent'>
                            راسلنا
                        </Link>
                        <Link  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/share/1PsiKS4QAu/"
                        className='px-6 py-3 mt-3 rounded-full w-full sm:w-fit font-sans font-semibold text-base lg:text-lg bg-gradient-to-br from-[#3BA387] to-[rgb(22,96,136)]
                     text-white-light hover:bg-greenhover-light hover:text-darkgreenhover-light hover:border hover:border-darkgreenhover-light hover:from-transparent hover:to-transparent'>
                            زيارة صفحتنا على فيسبوك
                        </Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center my-8 md:my-0'>
                    <div className='rounded-full bg-greenhover-light bg-opacity-50 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/Logo.png"
                            alt="My Family Logo"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={350}
                            height={350}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection